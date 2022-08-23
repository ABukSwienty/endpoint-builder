import getConfig from "./functions/get-config";

const main = async () => {
  const config = await getConfig();
  console.log(config);
};

export default main;
