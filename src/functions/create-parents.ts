import { ParentOptions } from "..";
import tabAll from "../helpers/tab-all";
import createStringEndpointObj from "./create-string-endpoint-obj";

/**
 * Writes the parent keys that contain all endpoints.
 * @param parents Record<string, ParentOptions>
 * @returns string
 */
const createParents = (parents: Record<string, ParentOptions>) => {
  let parentString = "";
  for (const [parent, options] of Object.entries(parents)) {
    parentString += `${parent}: {\n`;

    const paths = createStringEndpointObj(
      options["path-type"],
      options["include-path-name"]
    );

    parentString += tabAll(paths);
    parentString += "\r";
    parentString += `},\n`;
  }

  return parentString;
};

export default createParents;
