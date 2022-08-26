import { EndpointConfig } from ".";

export interface Constants {
  /**
   * The 'app root' where the config file is located.
   */
  ROOT: string;
  /**
   * The current working directory. I.e where the build script was called from (or where the package.json file is).
   */
  CURR_DIR: string;
  /**
   * All paths found from folders or added without any suffixes or slugs.
   */
  BASE_PATHS: Record<string, string>;
  /**
   * The endpoint.config.json object
   */
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
