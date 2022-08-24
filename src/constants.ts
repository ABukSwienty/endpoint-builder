import { EndpointConfig } from ".";

export interface Constants {
  ROOT: string;
  BASE_PATHS: Record<string, string>;
  CONFIG: EndpointConfig;
}

const CONSTANTS: Constants = {
  ROOT: "",
  BASE_PATHS: {},
  CONFIG: {
    "slug-type": ":*slug*",
    "include-path-name": false,
    "include-base-paths": true,
    "path-type": "string",
    "const-name": "ENDPOINTS",
    endpoints: {},
  },
};

export default CONSTANTS;
