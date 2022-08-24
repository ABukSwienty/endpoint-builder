#! /usr/bin/env node
var main = require("../lib/index");
const execSync = require("child_process").execSync;
const path = require("path");

async function init() {
  await main.default();
  const root = path.resolve("..", __dirname);
  execSync(`cd ${root} && tsc -p tsconfig.build.json`);
}

init();
