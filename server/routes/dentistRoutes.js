import express from "express";
import { getAllDentists,addDentist } from "../controllers/dentistController.js";

const router = express.Router();
router.get("/allDentists", getAllDentists);
router.post("/addDentist", addDentist);

export default router;