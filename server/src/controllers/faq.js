const Faq = require("../models/faq");

const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find({}).sort({ order: 1, createdAt: 1 });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createFaq = async (req, res) => {
  const faq = req.body;
  try {
    const newFaq = new Faq(faq);
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateFaq = async (req, res) => {
  const { id } = req.params;
  const faq = req.body;
  try {
    const updated = await Faq.findByIdAndUpdate(id, faq, { new: true });
    if (!updated) return res.status(404).json({ message: "Faq not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteFaq = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Faq.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Faq not found" });
    res.status(200).json({ message: "Faq deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getFaqs, createFaq, updateFaq, deleteFaq };
