import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const router = express.Router();


//signup 
router.post("/signup", async(req,res)=>{
    try {
      const {email,password} = req.body;
      
      // check if user already exists 
      const existingUser = await User.findOne({email});
      if(existingUser) return res.status(400).json({message:"user alrrady exists"});

//hash password
const hashedPassword = await bcrypt.hash(password,10);


//create user
const newUser = new User({email,password:hashedPassword});
await newUser.save();

res.status(201).json({message:"user created successfully"});


    } catch (error) {
console.log(error);
  res.status(500).json({ message: "Server error" });
        
    }
});

//login
router.post("/login",async(req,res)=>{
    try {
      const {email,password} = req.body;
      const user = await User.findOne({email});
      if(!user)  return res.status(400).json({ message: "Invalid email or password" });  

//check password
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch) return res.status(400).json({ message: "Invalid email or password" });
///generate jwt tokens 
const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
 res.status(200).json({ message: "Login successful", token });


    } catch (error) {
           console.error(error);
    res.status(500).json({ message: "Server error" });
    }
})
export default router;