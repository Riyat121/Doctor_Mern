import express from "express"; // express 
import connectDB from "./config/config.js";   // connecting db to main file 
import cors from "cors";  // cors connected 
import dotenv from "dotenv"; 
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();

// middleware 
app.use(express.json());
app.use(cors());

// routes placeholder 
app.get('/',(req,res)=>{
    res.send("local host is running");

})
app.use("/api/auth",userRoutes);


//connect db ans start server 
const PORT = process.env.PORT || 3009;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("db connected successfully");
        
    })
})

