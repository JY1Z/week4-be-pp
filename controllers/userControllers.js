const User = require("../models/userModel");

// GET /users
const getAllUser = (req, res) => {
  const user = User.getAll();
  res.json(user);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body }); // Spread the req.body object

  if (newUser) {
    res.status(201).json(newUser); // 201 Created
  } else {
    // Handle error (e.g., failed to create user)
    res.status(500).json({ message: "Failed to create user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, { ...req.body }); // Spread the req.body object

  if (updatedUser) {
    res.json(updatedUser);
  } else {
    // Handle update failure 
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);

  if (isDeleted) {
    res.status(204).send(); // 204 No Content
    } else {
    // Handle deletion failure 
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};