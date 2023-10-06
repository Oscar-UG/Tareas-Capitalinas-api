import { Router } from "express";
import {
  getList,
  updateList,
  saveList,
  deleteList,
} from "../controllers/list.controller.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { listValidator } from "../validators/list.validator.js";

const router = Router();

router.get("/lists", authenticateUser, getList);
router.post("/lists", authenticateUser, validateSchema(listValidator), saveList);
router.put("/lists/:id", authenticateUser, updateList);
router.delete("/lists/:id", authenticateUser, deleteList);

export default router;
