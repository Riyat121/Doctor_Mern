import express from "express"; // express 
import connectDB from "./config/config.js";   // connecting db to main file 
import cors from "cors";  // cors connected 
import dotenv from "dotenv"; 
import userRoutes from "./routes/userRoutes.js";
import dentistRoutes from "./routes/dentistRoutes.js";
import gynacRoutes from "./routes/gynacRoutes.js"
import cardiologistRoute from "./routes/cardiologistRoute.js"
import dietitionRoute from "./routes/dietitionRoute.js";
import orthopedistRoute from "./routes/orthopedistRoute.js"
import physiotherapistRoute from "./routes/physiotherapistRoute.js"
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
app.use("/api/dentists", dentistRoutes);
app.use("/api/gynecologists", gynacRoutes)
app.use("/api/cardiologists", cardiologistRoute)
app.use("/api/dietitions", dietitionRoute);
app.use("/api/orthopedists", orthopedistRoute);
app.use("/api/physiotherapists" ,physiotherapistRoute)

//connect db ans start server 
const PORT = process.env.PORT || 3009;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("db connected successfully");
        
    })
})

