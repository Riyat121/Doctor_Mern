import Orthopedist from "../models/orthopedistModel.js";

export const getAllOrthopedist = async(req,res)=>{
  try {
      const orthopedists = await Orthopedist.find();
    if(!orthopedists.length){
        return res.status(200).json([]);
    } 
    res.status(200).json(orthopedists)
  } catch (error) {
    res.status(500).json({
        message:"error fetching orthopedists",
        error:error.message
    })
  }
}

//post : add new orthopedist 
 export const addOrthopedist = async(req,res)=>{
    try {
     const orthopedist = new Orthopedist(req.body);
    await  orthopedist.save();
    res.status(201).json({
        message: "orthopedist added ",
        orthopedist
    })
    } catch (error) {
        res.status(500).json({
            error:error.message,
            message:"cannot add orthopedist "
        })
    }
 }
