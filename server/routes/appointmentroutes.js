import express from "express";
import { bookAppointment, getMyBookings } from "../controllers/AppointmentController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Book appointment
router.post("/book", protect, authorizeRoles("user"), bookAppointment);

// Get my bookings
router.get("/my-bookings", protect, authorizeRoles("user"), getMyBookings);

export default router;
