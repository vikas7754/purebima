const Testimonial = require("../models/testimonial");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const sharp = require("sharp");
const { uploadImageToCloudinary } = require("../middlewares/uploadImage");

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

const uploadImage = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) return res.status(500).json({ message: err.message });
    try {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 250, height: 250, fit: "cover" })
        .toBuffer();
      const url = await uploadImageToCloudinary(buffer);
      return res.status(200).json({ url });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
};

module.exports = {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  uploadImage,
};
