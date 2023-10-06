import express from "express";
import {
  registerUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  loginUser,
  logout,
} from "../controllers/user.controller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";

const router = express.Router();

// CRUD
router.post("/register", validateSchema(registerValidator), registerUser);
router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById);
router.put("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

//Login
router.post("/login", validateSchema(loginValidator), loginUser);
router.post("/logout", logout);

export default router;
