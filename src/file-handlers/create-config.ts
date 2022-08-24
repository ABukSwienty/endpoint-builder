import writeFile from "./write-file";
import findAppRoot from "./find-app-root";
import getConfig from "./get-config";
import logger from "../logger";

const createConfig = async () => {
  try {
    const appPath = await findAppRoot();

    if (!appPath) throw new Error();

    const data = {
      $schema: "node_modules/endpoint-builder/schema.json",
    };

    writeFile(appPath, "endpoint.config.json", JSON.stringify(data, null, 2));

    return await getConfig();
  } catch (error) {
    logger.fatal(
      "Could not find root dir! Please create endpoint.config.json manually"
    );
    return false;
  }
};

export default createConfig;
