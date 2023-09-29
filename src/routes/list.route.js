import { Router } from "express";
import {
  getList,
  updateList,
  saveList,
  deleteList,
} from "../controllers/list.controller.js";

const router = Router();

router.get("/lists", getList);
router.post("/lists", saveList);
router.put("/lists/:id", updateList);
router.delete("/lists/:id", deleteList);

export default router;
