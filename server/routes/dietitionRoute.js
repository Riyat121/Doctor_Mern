import express from "express";
import { getAllDietition , addDietition } from "../controllers/dietitionController.js";

const router = express.Router();

router.get("/getAllDietition" , getAllDietition);
router.post("/addDietition" , addDietition);
export default router;