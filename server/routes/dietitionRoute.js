import express from "express";
import { getAllDietition , addDietition } from "../controllers/dietitionController.js";

const router = express.Router();

router.get("/" , getAllDietition);
router.post("/" , addDietition);
export default router;