/* import logger from "../log/logger"; */
import fs from "fs";
function writeFile(path: string, name: string, data: string) {
  try {
    fs.writeFileSync(path + "/" + name, data);
    return true;
  } catch (error) {
    /* logger.error(`Could not write ${name} to ${path}!`); */
    console.log(error);
    process.exit();
  }
}

export default writeFile;
