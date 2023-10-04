import { Router } from "express";
import {
  getTasks,
  saveTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/tasks", authenticateUser, getTasks);
router.post("/tasks", authenticateUser, saveTask);
router.put("/tasks/:id", authenticateUser, updateTask);
router.delete("/tasks/:id", authenticateUser, deleteTask);

export default router;
