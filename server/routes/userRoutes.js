import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// ------------------- SIGNUP -------------------
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // create user (password hash happens in model)
    const newUser = new User({
      name,
      email,
      password,
      role: role || "user", // default is user
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});


// ------------------- LOGIN -------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // compare password using model method
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // generate token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


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
