import express from "express";
import { getAllDentists,addDentist } from "../controllers/dentistController.js";

const router = express.Router();
router.get("/allDentists", getAllDentists);
router.post("/addDoctor", addDentist);

export default router;