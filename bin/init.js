#! /usr/bin/env node
var main = require("../lib/index");
var logger = require("../lib/logger");
var util = require("util");
var exec = util.promisify(require("child_process").exec);
var constants = require("../lib/constants");
var copyToDir = require("../lib/file-handlers/copy-to-curr-dir");

async function init() {
  await main.default();
  var root = __dirname.replace("/bin", "");
  try {
    await exec(`cd ${root} && tsc -p tsconfig.build.json`);
    logger.default.success("Generated files:");
    logger.default.success(`${root}/dist/index.js`);
    if (constants.default.CONFIG["copy-to-current-directory"]) {
      logger.default.message("Copying to current directory.");
      copyToDir.default();
    }
  } catch (e) {
    console.error(e);
    logger.default.error("An unknown error occurred!");
  }
}

init();
