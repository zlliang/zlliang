import { cac } from "cac"

import packageJson from "../package.json" with { type: "json" }
import { registerNewCommand } from "./commands/new"
import { registerShipCommand } from "./commands/ship"

const cli = cac("journal")

cli.help().version(packageJson.version)

registerNewCommand(cli)
registerShipCommand(cli)

if (process.argv.slice(2).length === 0) {
  cli.outputHelp()
} else {
  cli.parse()
}
