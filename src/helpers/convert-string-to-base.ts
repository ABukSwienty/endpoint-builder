const convertStringToBase = (string: string) => ({
  key: string.toUpperCase().replace(/-/g, "_"),
  value: string.toLowerCase(),
});

export default convertStringToBase;
