import { ParentOptions } from "..";
import CONSTANTS from "../constants";
import tabAll from "../helpers/tab-all";
import createStringEndpointObj from "./create-string-endpoint-obj";

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
