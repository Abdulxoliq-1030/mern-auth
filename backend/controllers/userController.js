import asyncHandler from "express-async-handler";

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
