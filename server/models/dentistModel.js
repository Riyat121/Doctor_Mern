import mongoose from "mongoose";

const dentistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    experience_years: {
        type: Number,
        required: true,
    },

    clinic: {
        type: String,
        required: true,
    },
    fees_inr: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    services: {
        type: [String],
        required: true,
    },
    
},
 { timestamps: true });
const Dentist = mongoose.model("Dentist", dentistSchema);
export default Dentist;
