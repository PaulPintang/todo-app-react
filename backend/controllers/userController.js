// register user
// @route /api/users
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// authenticate user
// @route /api/users/login
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// Get user
// @route GET /api/users/me
const getUser = (req, res) => {
  res.json({ message: "User Information" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
