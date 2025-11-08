import Cardiologist from "../models/cardiologistModel.js";

export const getAllCardiologists = async(req,res)=>{
    try {
       const cardiologists = await Cardiologist.find();
        if(!cardiologists.length){
            res.status(200).json({
                message:"no cardiologists found",
            })
        }
        res.status(400).json(cardiologists)
    } catch (error) {
         res.status(500).json({
            message :"error fetching cardiologists",
            error:error.message
        }) 
    }
}

//Post : add a new cardiologist 
export const addCardiologist = async(req,res)=>{
    try {
        const cardiologist = new Cardiologist(req.body);
        await cardiologist.save();
         res.status(201).json({ message: "Dentist added", dentist });
    } catch (error) {
          res.status(400).json({ message: "Error adding cardiologist", error });
    }
}