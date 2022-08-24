import writeFile from "./file-handlers/write-file";
import createEndpoint from "./functions/create-endpoint";
import init from "./functions/init";
import logger from "./logger";
import path from "path";
import createFilePrefixes from "./functions/create-file-prefixes";

export interface EndpointOptions {
  suffix: string[];
  include: string[];
  exclude: string[];
  excludeAll: boolean;
  custom: { [key: string]: string[] };
}

export interface FolderOptions {
  path: string;
  exclude?: string[];
  include?: string[];
}

export interface ParentOptions {
  "path-type"?: "string" | "function";
  "include-path-name"?: boolean;
}

export interface EndpointConfig {
  $schema?: string;
  "file-prefixes"?: string[];
  "slug-type": string;
  "include-path-name": boolean;
  "include-base-paths": boolean;
  "path-type": "string" | "function";
  "const-name": string;
  endpoints: Record<string, Partial<EndpointOptions>>;
  parents?: Record<string, ParentOptions>;
  folders?: Record<string, FolderOptions>;
  paths?: string[];
}

const main = async () => {
  try {
    await init();
    const endpoint = createEndpoint();
    const filePrefixes = createFilePrefixes();
    writeFile(
      path.resolve(__dirname, ".."),
      "index.ts",
      filePrefixes + "\n" + endpoint
    );
  } catch (error) {
    if (error instanceof Error)
      logger.fatal("An unknown error occurred: " + error.message);
  }
};

export default main;
