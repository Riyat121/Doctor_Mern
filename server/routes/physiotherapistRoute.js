import express from "express";
import { getAllPhysiotherapist , addPhysiothrapist } from "../controllers/physiotherapistController.js";


const router = express.Router();

router.get("/" , getAllPhysiotherapist);
router.post("/", addPhysiothrapist)

export default router;