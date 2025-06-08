const { v2 } = require("cloudinary");
const streamifier = require("streamifier");
const { v4: uuid } = require("uuid");
const dotenv = require("dotenv");
dotenv.config();

const uploadFileFn = async (file) => {
  const fileBuffer = file.buffer;
  const fileName = uuid() + "-" + file.originalname;

  return new Promise((resolve, reject) => {
    let stream = v2.uploader.upload_stream(
      {
        folder: "files",
        resource_type: "raw",
        public_id: fileName,
        overwrite: true,
      },
      (error, result) => {
        if (result) {
          resolve(result.secure_url);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = uploadFileFn;
