import express from "express";
import { getAllOrthopedist , addOrthopedist } from "../controllers/orthopedistController.js";

const router = express.Router();
  
router.get("/getAllOrthopedist" , getAllOrthopedist);
router.post("/addOrthopedist" , addOrthopedist);

export default router;