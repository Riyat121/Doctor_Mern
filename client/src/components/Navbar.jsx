// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between h-16 items-center">
          <FaUserDoctor />
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">BookMyDoc</Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/login"
              className="hover:text-green-200 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-green-200 font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Links (simple stack) */}
      <div className="md:hidden flex justify-center space-x-4 py-2">
        <Link
          to="/login"
          className="hover:text-green-200 font-medium transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="hover:text-green-200 font-medium transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
