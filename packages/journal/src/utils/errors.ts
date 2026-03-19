export class JournalError extends Error {
  readonly exitCode: number

  constructor(message: string, exitCode = 1) {
    super(message)
    this.name = "JournalError"
    this.exitCode = exitCode
  }
}
