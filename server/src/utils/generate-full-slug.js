const generateSlug = require("./generate-slug");

const generateFullSlug = (title) => {
  const slugWithHyphen = "-" + generateSlug();
  const fullSlug = title
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
  return fullSlug + slugWithHyphen;
};

module.exports = generateFullSlug;
