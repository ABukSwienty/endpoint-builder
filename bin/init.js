#! /usr/bin/env node
var main = require("../lib/index");
var logger = require("../lib/logger");
var util = require("util");
var exec = util.promisify(require("child_process").exec);

async function init() {
  await main.default();
  var root = __dirname.replace("/bin", "");
  logger.default.success("Complete!");
  try {
    await exec(`cd ${root} && tsc -p tsconfig.build.json`);
  } catch (e) {
    console.error(e);
    logger.default.error("An unknown error occurred!");
  }
}

init();
