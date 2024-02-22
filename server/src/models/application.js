const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const applicationSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    subject: String,
    vehicleNumber: String,
    dob: String,
    category: String,
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
