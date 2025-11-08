import express from "express";
import { getAllPhysiotherapist , addPhysiothrapist } from "../controllers/physiotherapistController.js";


const router = express.Router();

router.get("/getAllPhysiothearpist" , getAllPhysiotherapist);
router.post("/addPhysiotherapist", addPhysiothrapist)

export default router;