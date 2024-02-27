const Page = require("../models/page");

const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({ type: "page" });
    const staticPages = await Page.find({ type: "static" });
    const components = await Page.find({ type: "component" });
    return res.status(200).json({ pages, staticPages, components });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getPage = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) {
      return res.status(404).json("Page not found");
    }
    return res.status(200).json(page);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createPage = async (req, res) => {
  try {
    const newPage = new Page(req.body);
    const savedPage = await newPage.save();
    return res.status(201).json(savedPage);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updatePage = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.body.slug });
    if (!page) {
      return res.status(404).json("Page not found");
    }
    const updatedPage = await Page.findByIdAndUpdate(
      page._id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedPage);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deletePage = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) {
      return res.status(404).json("Page not found");
    }
    await Page.findByIdAndDelete(page._id);
    return res.status(200).json("Page has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllPages,
  createPage,
  updatePage,
  deletePage,
  getPage,
};
