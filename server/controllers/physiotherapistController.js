import Physiotherapist from "../models/physiotherapistModel.js";

export const getAllPhysiotherapist = async(req,res)=>{
    try {
      const physiotherapists =await Physiotherapist.find();
      if(!physiotherapists.length){
        res.status(400).json({
            message:"no physiotherapist exists "
        })
      }  

      res.status(200).json(physiotherapists)
    } catch (error) {
        res.status(400).json({
            error:error.message,
            message:"error fetching physiotherapist "
        })
    }
}

//POST : add a new physiothrapist 
export const addPhysiothrapist =async(req,res)=>{
    try {
      const physiotherapist = new Physiotherapist(req.body);
      await physiotherapist.save();
      res.status(200).json(physiotherapist)  
    } catch (error) {
        res.status(400).json({
            message:"cannot add new physiothrapist",
            error:error.message
        })
    }
}