import fs from "fs";
const getContent = (path: string) => {
  const exists = fs.existsSync(path);
  if (!exists) throw new Error(`Could not find ${path}`);
  return fs.readFileSync(path, { encoding: "utf-8" });
};

export default getContent;
