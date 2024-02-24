const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const sharp = require("sharp");

exports.uploadImageToCloudinary = async (image) => {
  const resizedImg = await sharp(image.buffer).webp({ quality: 70 }).toBuffer();

  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream(
      {
        folder: "purebima",
      },
      (error, result) => {
        if (result) {
          resolve(result.secure_url);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(resizedImg).pipe(stream);
  });
};
