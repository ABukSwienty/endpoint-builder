import CONSTANTS from "../constants";
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
