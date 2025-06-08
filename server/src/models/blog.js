const mongoose = require("mongoose");
const { Schema } = mongoose;
const generateFullSlug = require("../utils/generate-full-slug");

const blogSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    media: [
      {
        type: {
          type: String,
          enum: ["image", "video"],
          default: "image",
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    categories: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      default: "published",
      enum: ["published", "draft", "archived"],
    },
  },
  { timestamps: true }
);

blogSchema.pre("validate", async function (next) {
  if (!this.title) throw { message: "Title is required!" };
  if (!this.description) throw { message: "Description is required!" };
  if (!this.media || this.media.length === 0)
    throw { message: "At least one thumbnail image is required!" };
  if (this.categories.length === 0)
    throw { message: "At least one category is required!" };
  this.slug = generateFullSlug(this.title);

  next();
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
