import fs from "fs";
import logger from "../logger";

/**
 * Writes a file to a given path, with a given name
 * @param path string
 * @param name string
 * @param data string
 * @returns true | undefined
 */
function writeFile(path: string, name: string, data: string) {
  try {
    fs.writeFileSync(path + "/" + name, data);
    return true;
  } catch (error) {
    logger.fatal(`Could not write ${name} to ${path}!`);
  }
}

export default writeFile;
