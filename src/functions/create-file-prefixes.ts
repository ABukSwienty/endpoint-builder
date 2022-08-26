import CONSTANTS from "../constants";

/**
 * Adds any prefixes to the file from the config. Prefixes are here understood as anything that belongs in the header of the file.
 * @returns string
 */
const createFilePrefixes = () => {
  if (
    !CONSTANTS.CONFIG["file-prefixes"] ||
    CONSTANTS.CONFIG["file-prefixes"].length === 0
  )
    return "";

  let filePrefixes = "";

  CONSTANTS.CONFIG["file-prefixes"].forEach((prefix) => {
    filePrefixes += `${prefix}\n`;
  });

  return filePrefixes;
};
export default createFilePrefixes;
