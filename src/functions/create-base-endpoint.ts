import CONSTANTS from "../constants";

const createBase = () => {
  let base = "BASE: {";
  for (const [key, uri] of Object.entries(CONSTANTS.BASE_PATHS)) {
    base += `\n\t${key}: "${uri}",`;
  }
  base += "\n},";
  return base;
};

export default createBase;
