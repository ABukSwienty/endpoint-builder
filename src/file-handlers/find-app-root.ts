import findPath from "./find-path";

const findAppRoot = async () => {
  try {
    const path = await findPath(process.cwd(), "node_modules");

    if (path.includes("node_modules")) {
      return path.replace("node_modules", "");
    } else {
      throw new Error("Could not find app root!");
    }
  } catch (error) {
    return false;
  }
};

export default findAppRoot;
