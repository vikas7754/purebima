const { v2 } = require("cloudinary");
const streamifier = require("streamifier");
const sharp = require("sharp");

const uploadImage = async (file) => {
  let resizedImg;
  if (file.mimetype === "image/gif") {
    resizedImg = file.buffer;
  } else {
    resizedImg = await sharp(file.buffer).webp({ quality: 70 }).toBuffer();
  }

  return new Promise((resolve, reject) => {
    const options = {
      folder: "images",
    };

    let stream = v2.uploader.upload_stream(options, (error, result) => {
      if (result) {
        resolve(result.secure_url);
      } else {
        reject(error);
      }
    });
    streamifier.createReadStream(resizedImg).pipe(stream);
  });
};

module.exports = uploadImage;
