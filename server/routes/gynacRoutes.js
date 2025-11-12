import express from "express";
import { addGynac, getAllGynec } from "../controllers/gynecologistController.js";

const router = express.Router();
router.get("/", getAllGynec);
router.post("/", addGynac);

export default router;