import CONSTANTS from "../constants";
import convertStringToBase from "../helpers/convert-string-to-base";
import functionToString from "../helpers/functionToString";
import suffixReader from "../helpers/suffix-reader";
import logger from "../logger";

/**
 * Writes the endpoint object. Loops through the endpoint key in config and then loops through all paths found from folders or added manually.
 * @param returnTypeFnc "string" | "function"
 * @param includePathName boolean
 * @returns string
 */
function createStringEndpointObj(
  returnTypeFnc: "string" | "function" = "string",
  includePathName: boolean = false
): string {
  const endpoints = CONSTANTS.CONFIG.endpoints;
  if (!endpoints || Object.keys(endpoints).length === 0) {
    logger.fatal("No endpoints found!");
  }

  let stringObject = "";

  for (const [path, options] of Object.entries(endpoints)) {
    const exclude = options.exclude
      ? options.exclude.map((value) => convertStringToBase(value).key)
      : false;
    const include = options.include ? options.include : false;
    const excludeAll = options.excludeAll ? options.excludeAll : false;
    const suffix = options.suffix ? options.suffix : "";
    const custom = options.custom ? options.custom : false;

    stringObject += `${path}: {`;
    let count = 0;
    // loop through base paths
    for (const [base, basePath] of Object.entries(CONSTANTS.BASE_PATHS)) {
      const prefix = includePathName ? basePath : ``;
      const valueAsString = Array.isArray(suffix)
        ? `${base}: "${prefix !== "" ? prefix + "/" : ``}${
            suffixReader(suffix).toString
          }",`
        : `${base}: "${prefix}",`;

      const functionToStringArgs = Array.isArray(suffix)
        ? suffixReader(suffix)
        : undefined;

      let stringKey =
        returnTypeFnc === "function"
          ? `${base}: ${functionToString(
              includePathName ? basePath : "",
              functionToStringArgs
            )},`
          : valueAsString;

      // going through config rules
      // if excludAll === true return
      if (!excludeAll) {
        // if include then exclude all others
        if (include) {
          if (include.includes(base)) {
            stringObject += "\n\t" + stringKey;
          }
        } else {
          // if exclude and not in exclude array then add else add all
          if (exclude) {
            if (!exclude.includes(base)) {
              stringObject += "\n\t" + stringKey;
            }
          } else {
            stringObject += "\n\t" + stringKey;
          }
        }
      }

      count++;
    }

    // looping through custom if any
    if (custom) {
      for (const [key, suffixes] of Object.entries(custom)) {
        const customUri = key.toLocaleLowerCase().replace(/_/g, "-");
        let customStringKey =
          returnTypeFnc === "function"
            ? `${key}: ${functionToString(customUri, suffixReader(suffixes))},`
            : `${key}: "${customUri}${suffixReader(suffixes).toString}",`;

        stringObject += "\n\t" + customStringKey;
      }
    }
    stringObject += "\n},\n";
  }

  return stringObject;
}

export default createStringEndpointObj;
