import findPath from "./find-path";
import path from "path";
import writeFile from "./write-file";

const createConfig = async () => {
  try {
    const nodePath = await findPath(__dirname, "node_modules");

    const root = path.resolve(nodePath, "..");

    const data = {
      $schema: process.cwd() + "/schema.json",
      hi: "there",
    };

    writeFile(root, "endpoint.config.json", JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.log(
      "Could not find root dir! Please create endpoint.config.json manually"
    );
    process.exit(1);
  }
};

export default createConfig;
