export const convertToCamelCase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index !== 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join("");
};
