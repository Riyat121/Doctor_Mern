import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import DoctorCategory from "./DoctorCategory";
import Footer from "../components/Footer";

function Home() {
  return (
 <>
    <div className="h-full w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-gray-50">
        
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Book Your Appointment Easily
          </h1>
          <p className="text-gray-600 text-lg">
            Connect with top doctors and schedule your appointments anytime, anywhere with{" "}
            <span className="font-semibold text-black">BookMyDoc</span>.
          </p>
          <button className="bg-black hover:bg-black text-white px-6 py-3 rounded-lg font-medium transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src='https://images.unsplash.com/photo-1758691462848-31a39258dbd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632'
            alt="Doctor illustration"
            className="w-[300px] md:w-[450px] object-contain rounded-2xl"
          />
        </div>
      </div>
    
    </div>
    <DoctorCategory/>
  <About/>
   <Footer/>
 </>
  );
}
export default Home;