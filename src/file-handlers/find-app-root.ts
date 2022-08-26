import findPath from "./find-path";

/**
 * Finds the 'App root' by searching for the first encounter of node_modules
 * @returns false | string
 */
const findAppRoot = async () => {
  const path = await findPath(process.cwd(), "node_modules");
  if (!path) return false;
  if (path.includes("node_modules")) {
    return path.replace("node_modules", "");
  } else {
    return false;
  }
};

export default findAppRoot;
