import {
  CreateUser,
  DeleteUser,
  GetUserById,
  GetUsers,
  UpdateUser,
} from "../module/user.module.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const data = await GetUsers();
    res.status(200).json({
      users: data,
      message: "Successfully fetched users data",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching users: " + err.message,
    });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, address, country } = req.body;
    const userData = await CreateUser(name, address, country);
    res.status(201).json({
      data: userData,
      message: "User Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating user: " + err.message,
    });
  }
};

// Get user by ID
export const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await GetUserById(id);
    res.status(200).json({
      data: data,
      message: "Successfully fetched the user",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching user: " + err.message,
    });
  }
};

// Update user by ID
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, country } = req.body;
    const data = await UpdateUser(id, name, address, country);
    res.status(200).json({
      data: data,
      message: "User updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating user: " + err.message,
    });
  }
};

// Delete user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await DeleteUser(id);
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting user: " + err.message,
    });
  }
};
