const handlePeriods = (string: string) => {
  if (string.includes("."))
    return string.slice(0, string.lastIndexOf(".")).replace(/./g, "-");
  return string;
};

export default handlePeriods;
