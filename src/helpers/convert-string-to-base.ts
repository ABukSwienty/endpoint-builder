const convertStringToBase = (string: string) => ({
  key: string.toUpperCase().replace("-", "_"),
  value: string.toLowerCase(),
});

export default convertStringToBase;
