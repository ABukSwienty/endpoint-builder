import findPath from "../file-handlers/find-path";
import getContent from "../file-handlers/get-content";

const getConfig = async (CONFIG_NAME = "endpoint.config.json") => {
  try {
    const path = await findPath(__dirname, CONFIG_NAME);
    const config = getContent(path);
    return JSON.parse(config);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

export default getConfig;
