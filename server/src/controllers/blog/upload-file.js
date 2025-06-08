const uploadFileFn = require("../../utils/upload-file");
const uploadImageFn = require("../../utils/upload-image");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const sharp = require("sharp");

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const uploadFile = async (req, res) => {
  upload.single("file")(req, res, async (err) => {
    if (err) return res.status(500).json({ message: err.message });
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      let fileUrl;
      if (file.size > MAX_FILE_SIZE) {
        return res.status(400).json({ message: "File size exceeds limit" });
      }
      if (file.mimetype.startsWith("image/")) {
        const resizedImage = await sharp(file.buffer)
          .webp({ quality: 70 })
          .toBuffer();
        fileUrl = await uploadImageFn(resizedImage);
      } else {
        fileUrl = await uploadFileFn(file);
      }

      return res.status(200).json({ url: fileUrl });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
};

module.exports = uploadFile;
