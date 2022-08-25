import { EndpointConfig } from ".";

export interface Constants {
  ROOT: string;
  CURR_DIR: string;
  BASE_PATHS: Record<string, string>;
  CONFIG: EndpointConfig;
}

const CONSTANTS: Constants = {
  ROOT: "",
  CURR_DIR: "",
  BASE_PATHS: {},
  CONFIG: {
    "slug-type": ":*slug*",
    "copy-to-current-directory": false,
    "include-path-name": false,
    "include-base-paths": true,
    "path-type": "string",
    "const-name": "ENDPOINTS",
    endpoints: {},
  },
};

export default CONSTANTS;
