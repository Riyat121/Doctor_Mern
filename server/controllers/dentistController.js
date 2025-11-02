import Dentist from "../models/dentistModel";


// get all dentists 
export const getAllDentists = async (req,res)=>{
    try {
      const dentists = await Dentist.find();
      res.status(200).json(dentists);

    } catch (error) {
        res.status(500).json({
            message :"error fetching dentists",
            error:error.message
        })
    }
};

// Post : add a new dentist 
export const addDentist = async(req,res)=>{
    try {
      const dentist = new Dentist(req.body);
        await dentist.save();
        res.status(201).json({ message: "Dentist added", dentist });
    } catch (error) {
         res.status(400).json({ message: "Error adding dentist", error });
    }
}