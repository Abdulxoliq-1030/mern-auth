import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc   Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc   Register a new user
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(200).json({ message: "Register User" });
});

// @desc   Logout user
// route POST /api/users/logout
// @access Public

const logOutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc Get user profile
// route GET /api/users/profile
// @access PRIVATE

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User profile" });
});

// @desc Update user profile
// route PUT /api/users/profile
// @access PRIVATE

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
};
