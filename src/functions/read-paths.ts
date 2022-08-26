import CONSTANTS from "../constants";
import convertStringToBase from "../helpers/convert-string-to-base";

/**
 * Reads paths if any defined in the config.
 * @returns undefined
 */
const readPaths = () => {
  const paths = CONSTANTS.CONFIG.paths;
  if (!paths) return;
  const baseUri: Record<string, string> = {};
  paths.forEach((path) => {
    const { key, value } = convertStringToBase(path);
    baseUri[key] = value;
  });

  CONSTANTS.BASE_PATHS = { ...CONSTANTS.BASE_PATHS, ...baseUri };
};

export default readPaths;
