import { EndpointConfig } from "..";
import CONSTANTS from "../constants";
import findPath from "../file-handlers/find-path";
import getContent from "../file-handlers/get-content";

/**
 * Finds the config file.
 * @param CONFIG_NAME string
 * @returns false | string
 */
const getConfig = async (
  CONFIG_NAME = "endpoint.config.json"
): Promise<false | EndpointConfig> => {
  const path = await findPath(__dirname, CONFIG_NAME);
  if (!path) return false;
  const config = getContent(path);
  if (!config) return false;
  CONSTANTS.ROOT = path.replace(CONFIG_NAME, "");
  return JSON.parse(config);
};

export default getConfig;
