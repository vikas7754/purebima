const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema(
  {
    name: String,
    designation: String,
    message: String,
    image: String,
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
module.exports = Testimonial;
