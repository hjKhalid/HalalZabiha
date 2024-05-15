const db = require("../models");
const SignUp = db.signUp;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookies = require("cookie-parser");

const signupCtrl = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const alreadyRegister = await SignUp.findOne({ where: { email: email } });
  if (alreadyRegister) {
    res.status(420).json({ message: "this email already registered" });
  } else {
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(password, salt);
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPass,
    };
    try {
      console.log(userData);
      const data = SignUp.build(userData);
      await data.save();
    } catch (error) {
      res.status(400).json({ message: { errorcode: "SIN001" } });
    }
    let token;
    try {
      token = jwt.sign(
        { userId: userData.firstName, email: userData.email },
        "khalidchaloblr",
        { expiresIn: "1h" }
      );
    } catch (error) {
      res.status(404).json("Somthing went wrong");
    }

    res.status(200).json({
      success: true,
      data: {
        userId: userData.firstName,
        email: userData.email,
        token: token,
      },
    });
  }
};
let authSuccess;
const signCtrl = async (req, res) => {
  const { email, password } = req.body;
  let userPassword;
  let userRegistered;
  let token;
  console.log(email);
  try {
    userRegistered = await SignUp.findOne({ where: { email: email } });
    if (userRegistered) {
      userPassword = await userRegistered.password;
    }
  } catch (error) {
    res
      .status(404)
      .json({ data: "this email is not register please register it" });
  }

  try {
    authSuccess = await bcrypt.compare(password, userPassword);
    token = jwt.sign(
      { userId: userRegistered.id, email: userRegistered.email },
      "khalidchaloblr",
      { expiresIn: "1h" }
    );

    {
      authSuccess
        ? res.status(200).json({ data: token })
        : res.status(200).json({ data: "Invalid User" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const logoutCtrl = async (req, res) => {
  try {
    (await authSuccess) == false;
  } catch (error) {
    res.status(200).json({ data: "logout" });
  }
};
module.exports = {
  signupCtrl,
  signCtrl,
  logoutCtrl,
};
