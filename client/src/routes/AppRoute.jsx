import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

import CategoryPage from "../pages/CategoryPage.jsx"
function AppRoute() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     
          <Route path="/category/:category" element={<CategoryPage />}></Route>
      </Routes>
   
  );
}

export default AppRoute;
