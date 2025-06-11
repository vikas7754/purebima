require("dotenv").config();
const express = require("express");
process.env.TZ = "Asia/Kolkata";
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
let cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://purebima.com",
  "https://www.purebima.com",
  "https://admin.purebima.com",
];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
PORT = process.env.PORT || 8000;
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyparser.json({ limit: "10mb" }));
app.use(bodyparser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyparser.text({ type: "text/html" }));
app.use(cookieparser());

app.use("/public", express.static(path.join(__dirname, "public")));

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Database not connecting!");
  });

app.get("/", (req, res) => {
  return res.status(200).json("Welcome to PureBima Server");
});

require("./src/routes")(app);

const server = app.listen(PORT, (error) => {
  if (!error) console.log("Server is Running at PORT: ", PORT);
  else console.log("Error occurred, server can't start", error?.message);
});
