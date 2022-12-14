import fs from "fs";
import CONSTANTS from "../constants";
import convertStringToBase from "../helpers/convert-string-to-base";
import handlePeriods from "../helpers/handlePeriods";
import logger from "../logger";

/**
 * Loops through a folder dir (if it exists) and creates BASE_PATHS based on given files found.
 * @returns undefined
 */
function readFolders() {
  const folders = CONSTANTS.CONFIG.folders;
  if (!folders) return;
  const baseUri: Record<string, string> = {};
  logger.message("Checking folders...");

  let totalFiles = 0;

  for (const [
    name,
    { path, exclude: configExclude, include: configInclude },
  ] of Object.entries(folders)) {
    const exclude = configExclude ? configExclude : [];
    const include = configInclude ? configInclude : [];

    const dirExists = fs.existsSync(CONSTANTS.ROOT + "/" + path);
    if (!dirExists)
      logger.fatal(
        `Could not find folders ${name} path: '${path}'. Please check your endpoint.config.json and make sure the path is relative to where the config file is and does not start with a /`
      );

    const fileNames = fs.readdirSync(CONSTANTS.ROOT + path);
    totalFiles += fileNames.length;

    logger.message(`Found ${fileNames.length} files in '${name}'`);

    fileNames.forEach((file) => {
      // don't add hidden files
      if (file.indexOf(".") === 0) {
        totalFiles -= 1;
        return;
      }

      // include x or exclude x
      if (include.length > 0) {
        file = handlePeriods(file);

        const { key, value } = convertStringToBase(file);

        baseUri[key] = value;
      } else {
        if (exclude.includes(file)) return;

        file = handlePeriods(file);

        const { key, value } = convertStringToBase(file);

        baseUri[key] = value;
      }
    });
  }

  if (Object.keys(baseUri).length === 0)
    logger.warning(
      `No paths were generated from the folders options. Make sure the folders aren't empty or that the path is correct.`
    );

  if (Object.keys(baseUri).length !== totalFiles)
    logger.warning(
      `Found more files then were created for the final endpoint. Filenames must be unique or they will be overwritten`
    );

  CONSTANTS.BASE_PATHS = { ...CONSTANTS.BASE_PATHS, ...baseUri };
}

export default readFolders;
