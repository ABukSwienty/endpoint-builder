const convertStringToBase = (string: string) => ({
  key: string.toUpperCase().replace(/_/g, "-"),
  value: string.toLowerCase(),
});

export default convertStringToBase;
