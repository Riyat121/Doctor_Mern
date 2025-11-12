import express from "express";
import { getAllDentists,addDentist } from "../controllers/dentistController.js";

const router = express.Router();
router.get("/", getAllDentists);
router.post("/", addDentist);

export default router;