import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { signup, login } from "../controllers/userController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);



router.get("/profile", protect, (req, res) => {
  res.json({ message: "User profile", user: req.user });
});
router.get(
  "/doctor-dashboard",
  protect,
  authorizeRoles("doctor"),
  (req, res) => {
    res.json({ message: "Doctor dashboard", user: req.user });
  }
);
router.post(
  "/book-appointment",
  protect,
  authorizeRoles("user"),
  (req, res) => {
    res.json({ message: "Appointment booked!" });
  }
);

export default router;
