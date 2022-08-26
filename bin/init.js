#! /usr/bin/env node
var main = require("../lib/app.js");
/* var logger = require("../lib/logger"); */
var util = require("util");
var exec = util.promisify(require("child_process").exec);
/* var constants = require("../lib/constants");
var copyToDir = require("../lib/file-handlers/copy-to-curr-dir"); */

async function init() {
  const values = await main.endpointBuilder.default();
  var root = __dirname.replace("/bin", "");
  try {
    await exec(`cd ${root} && tsc -p tsconfig.build.json`);
    values.logger.success("Generated files:");
    values.logger.success(`${root}/dist/index.js`);
    if (values.CONSTANTS.CONFIG["copy-to-current-directory"]) {
      values.logger.message("Copying to current directory.");
      values.copyToCurrDir();
    }
  } catch (e) {
    console.error(e);
    values.logger.error("An unknown error occurred!");
  }
}

init();
