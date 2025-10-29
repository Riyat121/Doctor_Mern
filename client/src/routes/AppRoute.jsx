import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Dentist from "../pages/Dentist.jsx";
import Category from "../pages/DoctorCategory.jsx";
import Gynac from "../pages/Gynac.jsx";

function AppRoute() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/dentist" element={<Dentist />} />
          <Route path="/category/:type" element={<Gynac />} />
      </Routes>
   
  );
}

export default AppRoute;
