import express from "express";
import {
  registerUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/user.controller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// CRUD
router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

//Login
router.post("/login", loginUser);



export default router;
