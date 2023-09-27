import { Router } from "express";
import {
  getTasks,
  saveTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);
router.post("/", saveTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
