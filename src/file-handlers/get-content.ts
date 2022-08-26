import fs from "fs";

/**
 * Gets the content of a file.
 * @param path
 * @returns false | string
 */
const getContent = (path: string) => {
  const exists = fs.existsSync(path);
  if (!exists) return false;
  return fs.readFileSync(path, { encoding: "utf-8" });
};

export default getContent;
