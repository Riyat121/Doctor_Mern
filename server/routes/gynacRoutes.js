import express from "express";
import { addGynac, getAllGynec } from "../controllers/gynecologistController.js";

const router = express.Router();
router.get("/allGynacs", getAllGynec);
router.post("/addGynac", addGynac);

export default router;