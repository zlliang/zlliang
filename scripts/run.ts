import { spawn } from "node:child_process"
import { parseSiteArg } from "./config"

type Command = "dev" | "build"

const [commandArg, ...rest] = process.argv.slice(2)

if (commandArg !== "dev" && commandArg !== "build") {
  console.error("Usage: pnpm <dev|build> <www|tech|days>")
  process.exit(1)
}

const command: Command = commandArg
const { site } = parseSiteArg(rest, `Usage: pnpm ${command} <www|tech|days>`)

spawn("pnpm", ["--filter", `@zlliang/${site}`, command], {
  stdio: "inherit",
}).on("exit", (code) => process.exit(code ?? 0))
