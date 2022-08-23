const getSuffix = (text: string) => {
  let suffixWithColon = ":";
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
      suffixWithColon += character;
    }
  }

  if (type === "") type = null;
  return { suffix, type, suffixWithColon };
};

const suffixReader = (strings: string[]) => {
  const suffixesWithColon: string[] = [];
  const suffixes: string[] = [];
  const types: Array<string | null> = [];

  for (let index = 0; index < strings.length; index++) {
    const { suffix, type, suffixWithColon } = getSuffix(strings[index]);
    suffixes.push(suffix);
    types.push(type);
    suffixesWithColon.push(suffixWithColon);
  }

  if (suffixes.length !== types.length)
    throw new Error("Could not read suffixes");

  return {
    suffixes,
    types,
    suffixesWithColon,
  };
};

export default suffixReader;
