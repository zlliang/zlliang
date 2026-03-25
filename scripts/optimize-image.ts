import { execFileSync } from 'node:child_process'
import fs from 'node:fs/promises'

import sharp from 'sharp'

const MAX_EDGE = 1800
const SKIP_BYTES = 800 * 1024
const TARGET_BYTES = 800 * 1024
const QUALITY_STEP = 2
const MIN_QUALITY = 70

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

function ext(file: string): string {
  return file.slice(file.lastIndexOf('.')).toLowerCase()
}

function stagedAddedFiles(): string[] {
  const output = execFileSync('git', ['diff', '--cached', '--name-only', '--diff-filter=A', '-z'], {
    encoding: 'utf8',
  })

  return output.split('\0').filter(Boolean)
}

function startQuality(file: string): number {
  const fileExt = ext(file)
  if (fileExt === '.jpg' || fileExt === '.jpeg') {
    return 90
  }
  if (fileExt === '.png') {
    return 90
  }
  if (fileExt === '.webp') {
    return 80
  }
  return 50
}

async function encode(input: Buffer, file: string, longEdge: number, quality: number): Promise<Buffer> {
  let pipeline = sharp(input, { failOn: 'none' }).rotate()

  if (longEdge > MAX_EDGE) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    })
  }

  const fileExt = ext(file)
  if (fileExt === '.jpg' || fileExt === '.jpeg') {
    return pipeline.jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer()
  }
  if (fileExt === '.png') {
    return pipeline.png({ quality, compressionLevel: 9, effort: 8 }).toBuffer()
  }
  if (fileExt === '.webp') {
    return pipeline.webp({ quality, effort: 5, smartSubsample: true }).toBuffer()
  }
  return pipeline.avif({ quality, effort: 5 }).toBuffer()
}

async function optimizeOne(file: string): Promise<boolean> {
  if (!SUPPORTED.has(ext(file))) {
    return false
  }

  const input = await fs.readFile(file)
  const meta = await sharp(input, { failOn: 'none' }).metadata()
  const width = meta.width ?? 0
  const height = meta.height ?? 0
  const longEdge = Math.max(width, height)
  const needResize = longEdge > MAX_EDGE

  if (!needResize && input.byteLength < SKIP_BYTES && longEdge < MAX_EDGE) {
    return false
  }

  let quality = startQuality(file)
  let output = await encode(input, file, longEdge, quality)

  while (output.byteLength > TARGET_BYTES && quality - QUALITY_STEP >= MIN_QUALITY) {
    quality -= QUALITY_STEP
    output = await encode(input, file, longEdge, quality)
  }

  if (!needResize && output.byteLength >= input.byteLength) {
    return false
  }

  await fs.writeFile(file, output)
  console.log(`optimize ${file} (${input.byteLength} -> ${output.byteLength})`)
  return true
}

async function main() {
  const files = stagedAddedFiles()

  if (files.length === 0) {
    console.log('no files to optimize')
    return
  }

  const changed: string[] = []

  for (const file of files) {
    try {
      if (await optimizeOne(file)) {
        changed.push(file)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.error(`error ${file}: ${message}`)
      process.exitCode = 1
    }
  }

  if (changed.length > 0) {
    execFileSync('git', ['add', '--', ...changed], { stdio: 'inherit' })
  }
}

await main()
