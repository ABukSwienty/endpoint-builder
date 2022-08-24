import suffixReader from "./suffix-reader";

const functionToString = (
  uri: string,
  data?: ReturnType<typeof suffixReader>
) => {
  let fncArguments = "(";

  let fncBody = `=> ("${uri}"`;
  if (uri === "") fncBody = `=> (`;

  if (!data) {
    fncArguments += ")";
    fncBody += ")";
    return fncArguments + " " + fncBody;
  }

  for (let index = 0; index < data.types.length; index++) {
    const type = data.types[index];
    const suffix = data.suffixes[index];

    if (index !== 0 && uri === "") fncBody += " + ";
    else if (uri !== "") fncBody += " + ";

    if (type !== null) {
      fncArguments += `${suffix}: ${type}, `;
      fncBody += `"/" + ${suffix}`;
    } else {
      fncBody += `"/${suffix}"`;
    }
  }

  // remove last comma in fncArguments
  if (fncArguments[fncArguments.length - 2] === ",")
    fncArguments = fncArguments.slice(0, fncArguments.length - 2);
  fncArguments += `)`;
  fncBody += ")";

  return fncArguments + " " + fncBody;
};
export default functionToString;
