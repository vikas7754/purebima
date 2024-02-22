require("dotenv").config();
const express = require("express");
process.env.TZ = "Asia/Kolkata";
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
let cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const allowedOrigins = ["http://localhost:3000"];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
PORT = 8000;
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
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
