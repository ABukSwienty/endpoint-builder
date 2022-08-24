#! /usr/bin/env node
var main = require("../lib/index");
const execSync = require("child_process").execSync;

async function init() {
  await main.default();
  execSync("tsc -p tsconfig.build.json");
}

init();
