import writeFile from "./write-file";
import findAppRoot from "./find-app-root";
import getConfig from "./get-config";
import logger from "../logger";
import CONSTANTS from "../constants";
import { EndpointConfig } from "../index";

const createConfig = async () => {
  try {
    const appPath = await findAppRoot();

    if (!appPath) throw new Error();

    const data: EndpointConfig = {
      $schema: "node_modules/endpoint-builder/endpoint.schema.json",
      ...CONSTANTS.CONFIG,
      "file-prefixes": [
        'type Example = "an example of prefixing the file with additional types" | string',
      ],
      endpoints: {
        GET: {
          suffix: ["id:number", "type:Example"],
        },
        GET_ALL: {},
      },
      folders: {
        SRC: {
          path: "./src",
        },
      },
      parents: {
        BACKEND: {
          "path-type": "string",
          "include-path-name": false,
        },
        FRONTEND: {
          "path-type": "function",
          "include-path-name": true,
        },
      },
      paths: ["user", "post"],
    };

    writeFile(appPath, "endpoint.config.json", JSON.stringify(data, null, 2));

    return await getConfig();
  } catch (error) {
    logger.fatal(
      "Could not find root dir! Please create endpoint.config.json manually. \n You can find the config schema here: node_modules/endpoint-builder/endpoint.schema.json"
    );
    return false;
  }
};

export default createConfig;
