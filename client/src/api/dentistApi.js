import axios from "axios";

const API = axios.create({
    baseURL : "https://doctor-mern-kzd5.onrender.com/api"
});

//fetch all dentists 
export const getAllDentists =()=> API.get("/dentists");


// add new dentist 
export const addDentist = (data)=> API.post("/dentists",data);