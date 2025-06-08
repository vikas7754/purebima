module.exports = (app) => {
  app.use("/api/user", require("./user"));
  app.use("/api/application", require("./application"));
  app.use("/api/faq", require("./faq"));
  app.use("/api/testimonial", require("./testimonial"));
  app.use("/api/admin", require("./admin"));
  app.use("/api/page", require("./page"));
  app.use("/api/blog", require("./blog"));
};
