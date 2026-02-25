import Appointment from "../models/AppointmentModel.js";

export const bookAppointment = async (req, res) => {
  try {
    const userId = req.user.id; // from token
    const { doctorId, date, time } = req.body;

    // Check if slot already booked
    const existing = await Appointment.findOne({
      doctorId,
      date,
      time,
      status: "booked",
    });

    if (existing) {
      return res.status(400).json({
        message: "Slot already booked",
      });
    }

    const appointment = await Appointment.create({
      userId,
      doctorId,
      date,
      time,
    });

    res.status(201).json({
      message: "Appointment booked",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const getMyBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Appointment.find({ userId }).sort({
      createdAt: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
