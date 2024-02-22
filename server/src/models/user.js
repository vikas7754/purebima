const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const SECRET = process.env.JWT_SECRET || "secret";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      index: true,
      unique: true,
      required: true,
      trim: true,
    },
    password: String,
    phone: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    token: String,
  },
  { timestamps: true }
);

// to signup a user
userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(salt, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//to login
userSchema.methods.comparepassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

// generate token
userSchema.methods.generateToken = async function () {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), SECRET);
  user.token = token;
  await user.updateOne({ $set: { token: token } });
  return token;
};

// find by token
userSchema.static("findByToken", async (token) => {
  try {
    const decode = jwt.verify(token, SECRET);
    const User = mongoose.model("User");
    const userdata = await User.findOne({ _id: decode, token: token });
    return userdata;
  } catch (err) {
    throw err;
  }
});

//delete token
userSchema.methods.deleteToken = async (token, cb) => {
  try {
    const User = mongoose.model("User");
    const user = await User.updateOne({ $unset: { token: 1 } });
    return user;
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
