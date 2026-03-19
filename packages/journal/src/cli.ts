import { readFile } from "node:fs/promises"
import { cac } from "cac"

import { createNote, createPostDraft } from "./commands/new"
import { shipDraft } from "./commands/ship"
import { isNoteType, noteTypeSlugs } from "./note-types"
import { resolveJournalContext } from "./utils/context"
import { JournalError } from "./utils/errors"

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8")
) as { version: string }

const cli = cac("journal")

cli.help().version(packageJson.version)

cli
  .command("new <entry> [title...]", "Create a new note or post draft")
  .option("--type <type>", `Note type when entry is \`note\` (${noteTypeSlugs.join(", ")})`, {
    default: "regular",
  })
  .example("journal new note --type link \"A useful article\"")
  .example("journal new post \"How I use AI agents\"")
  .action((entry: string, title: string[], options: { type: string }) => {
    void run(async () => {
      const context = await resolveJournalContext()

      if (entry === "note") {
        if (!isNoteType(options.type)) {
          throw new JournalError(`Invalid note type: ${options.type}. Expected one of: ${noteTypeSlugs.join(", ")}`)
        }

        const note = await createNote(context, title, options.type)
        process.stdout.write(`Created note #${note.number}: ${note.filePath}\n`)
        return
      }

      if (entry === "post") {
        if (options.type !== "regular") {
          throw new JournalError("The --type option can only be used with `journal new note`.")
        }

        const post = await createPostDraft(context, title)
        process.stdout.write(`Created post draft: ${post.filePath}\n`)
        return
      }

      throw new JournalError("Invalid entry type. Expected `note` or `post`.")
    })
  })

cli
  .command("ship [draft]", "Publish a post draft and create the associated note")
  .example("journal ship")
  .example("journal ship how-i-use-ai-agents")
  .action((draft: string | undefined) => {
    void run(async () => {
      const context = await resolveJournalContext()
      const shipped = await shipDraft(context, draft)

      process.stdout.write(`Shipped post: ${shipped.postPath}\n`)
      process.stdout.write(`Created note #${shipped.note.number}: ${shipped.note.filePath}\n`)

      if (shipped.movedImagesPath) {
        process.stdout.write(`Moved images to: ${shipped.movedImagesPath}\n`)
      }

      process.stdout.write(`Deleted draft: ${shipped.draftPath}\n`)
    })
  })

if (process.argv.slice(2).length === 0) {
  cli.outputHelp()
} else {
  cli.parse()
}

async function run(task: () => Promise<void>) {
  try {
    await task()
  } catch (error) {
    if (error instanceof JournalError) {
      process.stderr.write(`${error.message}\n`)
      process.exitCode = error.exitCode
      return
    }

    throw error
  }
}
