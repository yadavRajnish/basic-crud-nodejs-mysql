import express from "express";
import {
  createUser,
  deleteUser,
  getByID,
  getUsers,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/get-users", getUsers);
router.post("/add-user", createUser);
router.get("/get-user/:id", getByID);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
