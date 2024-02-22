const Application = require("../models/application");

const saveApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    return res
      .status(201)
      .json({ message: "Application submitted successfully." });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getApplications = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * limit;
  try {
    const applications = await Application.find({})
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 });
    const total = await Application.countDocuments({});
    return res.status(200).json({ applications, total });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  saveApplication,
  getApplications,
};
