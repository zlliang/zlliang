import { cac } from "cac"

import packageJson from "../package.json" with { type: "json" }
import { registerNewCommand } from "./commands/new"
import { registerShipCommand } from "./commands/ship"
import { registerOptimizeImageCommand } from "./commands/optimize-image"

const cli = cac("journal")

cli.help().version(packageJson.version)

registerNewCommand(cli)
registerShipCommand(cli)
registerOptimizeImageCommand(cli)

if (process.argv.slice(2).length === 0) {
  cli.outputHelp()
} else {
  cli.parse()
}
