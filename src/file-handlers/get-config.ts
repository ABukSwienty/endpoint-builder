import { EndpointConfig } from "..";
import CONSTANTS from "../constants";
import findPath from "../file-handlers/find-path";
import getContent from "../file-handlers/get-content";
import logger from "../logger";

const getConfig = async (
  CONFIG_NAME = "endpoint.config.json"
): Promise<false | EndpointConfig> => {
  try {
    const path = await findPath(__dirname, CONFIG_NAME);
    const config = getContent(path);
    CONSTANTS.ROOT = path.replace(CONFIG_NAME, "");
    return JSON.parse(config);
  } catch (error) {
    if (error instanceof Error) logger.error(error.message);
    return false;
  }
};

export default getConfig;
