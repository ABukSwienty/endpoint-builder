import CONSTANTS from "../constants";
import createBase from "./create-base-endpoint";
import createStringEndpointObj from "./create-string-endpoint-obj";
import tabAll from "../helpers/tab-all";
import createParents from "./create-parents";

const createEndpoint = () => {
  let endpoint = `const ${CONSTANTS.CONFIG["const-name"]} = {\n`;

  if (CONSTANTS.CONFIG.parents)
    endpoint += tabAll(createParents(CONSTANTS.CONFIG.parents));
  else
    endpoint += tabAll(
      createStringEndpointObj(
        CONSTANTS.CONFIG["path-type"],
        CONSTANTS.CONFIG["include-base-paths"]
      )
    );

  endpoint += "\r";

  if (CONSTANTS.CONFIG["include-base-paths"]) endpoint += tabAll(createBase());

  endpoint += "\n};\n";

  endpoint += `export default ${CONSTANTS.CONFIG["const-name"]}`;

  return endpoint;
};

export default createEndpoint;
