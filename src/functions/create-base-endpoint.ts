import CONSTANTS from "../constants";

/**
 * Writes the BASE endpoints. I.e. all endpoints without additional arguments or slugs.
 * @returns string
 */
const createBase = () => {
  let base = "BASE: {";
  for (const [key, uri] of Object.entries(CONSTANTS.BASE_PATHS)) {
    base += `\n\t${key}: "${uri}",`;
  }
  base += "\n},";
  return base;
};

export default createBase;
