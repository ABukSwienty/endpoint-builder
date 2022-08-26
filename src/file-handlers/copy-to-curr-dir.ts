import CONSTANTS from "../constants";
import fs from "fs";
import path from "path";
import logger from "../logger";
import writeFile from "./write-file";

/**
 * Copys ./dist files compiled by ts to the current working directory.
 */
const copyToCurrDir = () => {
  const copyToPath = CONSTANTS.CURR_DIR;
  const copyFromPath = path.resolve(__dirname, "..", "dist");
  if (!fs.existsSync(copyFromPath))
    logger.fatal("Could not find the dist folder.");

  const files = fs.readdirSync(copyFromPath);
  if (!files || files.length === 0)
    logger.fatal("Could not find any files to copy.");

  files.forEach((file) => {
    const readFile = fs.readFileSync(copyFromPath + "/" + file, "utf-8");
    writeFile(copyToPath, file, readFile);
  });
  logger.success(`Added files to ${copyToPath}`);
};

export default copyToCurrDir;
