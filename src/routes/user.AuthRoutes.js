import express from "express";
import {
  registerUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post("/register", registerUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById)
router.put("/users/:userId", updateUser)
router.delete("/users/:userId", deleteUser)

export default router;
