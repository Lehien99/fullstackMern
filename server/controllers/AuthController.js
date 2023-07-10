const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../helpers/jwt");

const saltRounds = 10;

// @desc Register user
// @access Public
module.exports = {
  register: async (req, res) => {
    const { username, email, password } = req.body;

    //Simple validation
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing username, password or email",
      });
    }
    const user = await User.findOne({ username });
    const emailUser = await User.findOne({ email });
    try {
      // check for existing user
      if (user || emailUser) {
        return res
          .status(400)
          .json({ success: false, message: "User and Email already exists" });
      }

      bcrypt.hash(password, saltRounds, async (err, hash) => {
        // cach khac
        // const newUser = await User.create({
        //   username,
        //   email,
        //   password: hash,
        // });
        const newUser = new User({
          username,
          email,
          password: hash,
        });
        await newUser.save();
        res.json({
          success: true,
          message: "User created successfully",
        });
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  login: async (req, res) => {
    const { password, email } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing password or email",
      });
    }
    try {
      //Check for existing user
      const user = await User.findOne({ email: email }).exec();
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect email or password" });
      }
      // Email found
      const { password: hash } = user;
      bcrypt.compare(password, hash, (err, result) => {
        //result === true
        if (result) {
          const accessToken = generateAccessToken(user);
          return res.status(200).json({
            success: true,
            message: " User login successfully",
            accessToken,
          });
        }
        return res
          .status(400)
          .json({ success: false, message: "Incorrect email or password" });
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
