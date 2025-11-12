import Physiotherapist from "../models/physiotherapistModel.js";

export const getAllPhysiotherapist = async(req,res)=>{
    try {
      const physiotherapists =await Physiotherapist.find();
      if(!physiotherapists.length){
        return res.status(200).json([]);
      }  

      res.status(200).json(physiotherapists)
    } catch (error) {
        res.status(500).json({
            message:"error fetching physiotherapist ",
            error:error.message,
        })
    }
}

//POST : add a new physiothrapist 
export const addPhysiothrapist =async(req,res)=>{
    try {
      const physiotherapist = new Physiotherapist(req.body);
      await physiotherapist.save();
      res.status(201).json({
        message:"physiotherapist added",
        physiotherapist
      })  
    } catch (error) {
        res.status(400).json({
            message:"cannot add new physiothrapist",
            error:error.message
        })
    }
}