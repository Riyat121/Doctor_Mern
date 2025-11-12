import express from "express";
import { addCardiologist , getAllCardiologists } from "../controllers/cardiologistController.js";

const router = express.Router();
router.get("/", getAllCardiologists);
router.post("/", addCardiologist);

export default router;