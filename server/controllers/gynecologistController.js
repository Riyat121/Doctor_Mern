import Gynecologist from "../models/gynecologistsModel.js"

//get all gynacs 
export const getAllGynec = async(req,res)=>{
    try {
        const gynec = await Gynecologist.find();
        if(!gynec.length){
            return res.status(200).json(
                {
                    message:"no gynac found!"
                }
            )
        }
        res.status(400).json(gynec)
    } catch (error) {
          res.status(500).json({
             message:"error fetching dentists",
            error:error.message
          })
    }
}

//Post : add a new gynac
export const addGynac = async(req,res)=>{
    try {
      const gynac = new Gynecologist (req.body);
      await gynac.save();
      res.status(201).json({
        message:"gynac added", gynac
      }) 
    } catch (error) {
          res.status(400).json({ message: "Error adding gynac", error });
    }
}