import express from "express";
import { getAllOrthopedist , addOrthopedist } from "../controllers/orthopedistController.js";

const router = express.Router();
  
router.get("/" , getAllOrthopedist);
router.post("/" , addOrthopedist);

export default router;