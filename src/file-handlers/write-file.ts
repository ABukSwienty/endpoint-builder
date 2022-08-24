/* import logger from "../log/logger"; */
import fs from "fs";
import logger from "../logger";
function writeFile(path: string, name: string, data: string) {
  try {
    fs.writeFileSync(path + "/" + name, data);
    return true;
  } catch (error) {
    logger.fatal(`Could not write ${name} to ${path}!`);
  }
}

export default writeFile;
