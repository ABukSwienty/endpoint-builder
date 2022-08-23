import fs from "fs";
import path from "path";

const findPath = async (dir = __dirname, needle: string): Promise<string> => {
  const ls = await fs.promises.readdir(dir);
  if (ls.includes(needle)) return path.join(dir, needle);
  else if (dir === "/") throw new Error(`Could not find ${needle}`);
  else return findPath(path.resolve(dir, ".."), needle);
};

export default findPath;
