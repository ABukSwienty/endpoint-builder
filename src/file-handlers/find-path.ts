import fs from "fs";
import path from "path";

/**
 * Recursively finds the needle within a given dir. Does not look into subtrees but only steps up once every iteration and looks current list of files
 * @param dir string
 * @param needle string
 * @returns false | string
 */
const findPath = async (
  dir = __dirname,
  needle: string
): Promise<string | false> => {
  const ls = await fs.promises.readdir(dir);
  if (ls.includes(needle)) return path.join(dir, needle);
  else if (dir === "/") return false;
  else return findPath(path.resolve(dir, ".."), needle);
};

export default findPath;
