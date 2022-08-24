import CONSTANTS from "../constants";

const getSuffix = (text: string) => {
  let slug = "";
  let suffix = "";
  let type: string | null = "";
  let addSuffixFlag = true;
  let typeFlag = false;

  for (let index = 0; index < text.length; index++) {
    const character = text[index];

    if (typeFlag) type += character;

    if (character === ":") {
      addSuffixFlag = false;
      typeFlag = true;
    }

    if (addSuffixFlag) {
      suffix += character;
      slug += character;
    }
  }

  const finalSlug = text.includes(":")
    ? CONSTANTS.CONFIG["slug-type"].replace("*slug*", slug)
    : null;

  if (type === "") type = null;
  return { suffix, type, slug: finalSlug };
};

const suffixReader = (strings: string[]) => {
  const slugs: Array<string | null> = [];
  const suffixes: string[] = [];
  const types: Array<string | null> = [];

  for (let index = 0; index < strings.length; index++) {
    const { suffix, type, slug } = getSuffix(strings[index]);
    suffixes.push(suffix);
    types.push(type);
    slugs.push(slug);
  }

  if (suffixes.length !== types.length)
    throw new Error("Could not read suffixes");

  const toString = slugs
    .map((value, index) => {
      if (value) return value;
      return suffixes[index];
    })
    .join("/");

  return {
    suffixes,
    types,
    slugs,
    toString,
  };
};

export default suffixReader;
