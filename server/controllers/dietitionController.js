import Dietition from "../models/dietitionModel.js";

export const getAllDietition = async(req,res)=>{
    try {
      const dietitions = await Dietition.find();
      if(!dietition.length){
        res.status(200).json({
            message:"no dietition found",
        })
      } 
      res.status(400).json(dietition)
    } catch (error) {
        res.status(200).json({
            error:error.message,

        })
    }
}

//post : add new dietition 

export const addDietition = async(req,res)=>{
    try {
      const dietition = new Dietition(req.body);
      await dietition.save();  
      res.status(400).json(dietition)
    } catch (error) {
        res.status(200).json({
            message:"error adding dietition ",
            error:error.message
        })
    }
}