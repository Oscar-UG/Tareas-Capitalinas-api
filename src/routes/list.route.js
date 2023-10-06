import { Router } from "express";
import {
  getList,
  updateList,
  saveList,
  deleteList,
} from "../controllers/list.controller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/lists", authenticateUser, getList);
router.post("/lists", authenticateUser, saveList);
router.put("/lists/:id", authenticateUser, updateList);
router.delete("/lists/:id", authenticateUser, deleteList);

export default router;
