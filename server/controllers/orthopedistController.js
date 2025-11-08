import Orthopedist from "../models/orthopedistModel.js";

export const getAllOrthopedist = async(req,res)=>{
  try {
      const orthopedists = await Orthopedist.find();
    if(!orthopedists.length){
        res.status(200).json({
            message:"no orthopedist found ",

        })
    } 
    res.status(500).json(orthopedists)
  } catch (error) {
    res.status(400).json({
        message:"cannot find orthopedist",
    })
  }
}

//post : add new orthopedist 
 export const addOrthopedist = async(req,res)=>{
    try {
     const orthopedist = new Orthopedist(req.body);
    await  orthopedist.save();
    res.status(200).json({
        message: "orthopedist added ", orthopedist
    })
    } catch (error) {
        res.status(500).json({
            error:error.message,
            message:"cannot add orthopedist "
        })
    }
 }
