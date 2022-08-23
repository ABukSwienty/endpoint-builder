import createConfig from "./file-handlers/create-config";
import getConfig from "./file-handlers/get-config";

const main = async () => {
  const config = await getConfig();

  if (!config) {
    console.log("Creating config");
    await createConfig();
  }
};

export default main;
