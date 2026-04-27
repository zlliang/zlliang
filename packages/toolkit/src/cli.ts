import { cac } from "cac"

import { registerNewCommand } from "./commands/new"
import { registerShipCommand } from "./commands/ship"
import { registerOptimizeImageCommand } from "./commands/optimize-image"

import packageJson from "../package.json"

const cli = cac("toolkit")

cli
  .usage("[options] <command>")
  .option("--dir <dir>", "Path to a site root that contains `content/notes` and `content/posts`, or a child directory inside it")
  .help()
  .version(packageJson.version)

registerNewCommand(cli)
registerShipCommand(cli)
registerOptimizeImageCommand(cli)

if (process.argv.slice(2).length === 0) {
  cli.outputHelp()
} else {
  cli.parse()
}
