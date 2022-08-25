import findPath from "./find-path";

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
