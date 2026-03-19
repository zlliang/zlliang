import { JournalError } from "./errors"

export async function handleCommand(task: () => Promise<void>) {
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
