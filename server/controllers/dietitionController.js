import Dietition from "../models/dietitionModel.js";

export const getAllDietition = async(req,res)=>{
    try {
      const dietitions = await Dietition.find();
      if(!dietitions.length){
        return res.status(200).json([]);
      } 
      res.status(200).json(dietitions)
    } catch (error) {
        res.status(500).json({
            message:"error fetching dietitions",
            error:error.message,
        })
    }
}

//post : add new dietition 

export const addDietition = async(req,res)=>{
    try {
      const dietition = new Dietition(req.body);
      await dietition.save();  
      res.status(201).json({
        message:"dietition added",
        dietition
      })
    } catch (error) {
        res.status(400).json({
            message:"error adding dietition ",
            error:error.message
        })
    }
}