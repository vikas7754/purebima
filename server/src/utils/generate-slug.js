const generateSlug = (length = 7) => {
  let str = Math.round(
    Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  )
    .toString(36)
    .slice(1);
  return str;
};

module.exports = generateSlug;
