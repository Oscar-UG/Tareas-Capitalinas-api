import { Router } from "express";
import {
  getTasks,
  saveTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", saveTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
