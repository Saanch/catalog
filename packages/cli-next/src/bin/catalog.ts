#!/usr/bin/env node
import * as args from "args";

args
  .command("start", "Starts the Catalog server")
  .command("build", "Builds a Catalog static site");

args.parse(process.argv);

if (!args.sub.length) {
  // no commands
  args.showHelp();
}
