const Testimonial = require("../models/testimonial");

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTestimonial = async (req, res) => {
  const testimonial = req.body;
  try {
    const newTestimonial = new Testimonial(testimonial);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const testimonial = req.body;
  try {
    const updated = await Testimonial.findByIdAndUpdate(id, testimonial, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Testimonial not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Testimonial.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "Testimonial not found" });
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
