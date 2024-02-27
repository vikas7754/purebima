const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["page", "static", "component"],
      default: "page",
    },
    data: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

const Page = mongoose.model("Page", pageSchema);
module.exports = Page;
