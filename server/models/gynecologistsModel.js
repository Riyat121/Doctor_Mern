import mongoose from "mongoose";

const gynecologistSchema = new mongoose.Schema({
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
        type: String,
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
const Gynecologist = mongoose.model("Gynecologist", gynecologistSchema);
export default Gynecologist;
