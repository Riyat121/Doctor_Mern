import express from "express";
import { addCardiologist , getAllCardiologists } from "../controllers/cardiologistController.js";

const router = express.Router();
router.get("/getAllCardiologist", getAllCardiologists);
router.post("/addCardiologist", addCardiologist);

export default router;