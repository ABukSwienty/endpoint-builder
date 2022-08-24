import CONSTANTS from "../constants";
import createConfig from "../file-handlers/create-config";
import getConfig from "../file-handlers/get-config";
import logger from "../logger";
import readFolders from "./read-folders";
import readPaths from "./read-paths";

const init = async () => {
  logger.message("Looking for endpoint.config.json");
  let config = await getConfig();

  if (!config) {
    logger.warning("Could not find conifg! Attempting to create...");
    config = await createConfig();
    if (!config) {
      logger.fatal(
        "Could not create endpoint.config.json. Please add it manually."
      );
    } else {
      logger.success(`Created config at ${CONSTANTS.ROOT}`);
    }
  }

  CONSTANTS.CONFIG = { ...CONSTANTS.CONFIG, ...config };

  readFolders();
  readPaths();

  if (Object.keys(CONSTANTS.BASE_PATHS).length === 0) {
    logger.fatal("Error. No paths were added! Check your config settings.");
  }
};

export default init;
