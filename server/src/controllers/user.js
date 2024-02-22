const User = require("../models/user");
const axios = require("axios");
const jwt = require("jsonwebtoken");

// User signup controller
const signup = async (req, res) => {
  let { email, name, mobile, password } = req.body;
  email = email.toLowerCase().trim();

  try {
    if (!email || !name || !mobile || !password)
      return res.status(400).json({ message: "All fields are required!" });
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.send("Email already exists!");
    if (password.length < 8)
      return res
        .status(400)
        .json({ message: "Password should be atleast 8 characters long!" });
    const newUser = new User({
      email,
      name,
      mobile,
      password,
    });
    const user = await newUser.save();
    const token = await newUser.generateToken();
    await res
      .cookie("auth", token, {
        sameSite: "none",
        secure: true,
      })
      .json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// User login controller
const login = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).json({ message: "All fields are required!" });
  const email = req.body.email.toLowerCase().trim();
  const password = req.body.password.trim();
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });
    const isMatch = await user.comparepassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password!" });
    const token = await user.generateToken();
    await res
      .cookie("auth", token, {
        sameSite: "none",
        secure: true,
      })
      .json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Google login controller
const googleLogin = async (req, res) => {
  const { accessToken, credential } = req.body;
  try {
    if (!credential && !accessToken) {
      return res.status(400).json({ message: "Login failed!" });
    }
    const result = accessToken
      ? await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
      : jwt.decode(credential);
    if (!result) return res.status(400).json({ message: "Login failed!" });
    const id = result?.data?.id || result?.sub;
    const email = result?.data?.email || result?.email;
    const name = result?.data?.name || result?.name;
    if (!id || !email || !name)
      return res.status(400).json({ message: "Login failed!" });

    const isExist = await User.findOne({
      email,
    });

    if (!isExist) {
      const password = Math.random().toString(36).slice(-10);
      const newUser = new User({
        email,
        name,
        password,
      });
      const user = await newUser.save();
      const token = await newUser.generateToken();
      return await res
        .cookie("auth", token, {
          sameSite: "none",
          secure: true,
        })
        .json(user);
    }

    const token = await isExist.generateToken();
    return await res
      .cookie("auth", token, {
        sameSite: "none",
        secure: true,
      })
      .json(isExist);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// User logout controller
const logout = async (req, res) => {
  try {
    const user = await req.user.deleteToken(req.token);
    if (!user) return res.status(400).send("Something went wrong!");
    res.clearCookie("auth");
    res.status(200).json({ message: "Logged out successfully!" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Get login user controller
const getLoginUser = async (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user);
  }
  return res.status(200).json({});
};

module.exports = {
  signup,
  login,
  googleLogin,
  logout,
  getLoginUser,
};
