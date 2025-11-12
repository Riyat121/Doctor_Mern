// src/api/index.js (The file you import as '../api')

import axios from 'axios';

// Access the variable using import.meta.env and the VITE_ prefix
// Fallback to a default URL if VITE_API_URL is not defined
const baseURL = import.meta.env.VITE_API_URL || 'https://doctor-mern-kzd5.onrender.com/api';

if (!import.meta.env.VITE_API_URL) {
  console.warn("VITE_API_URL is not defined in the environment. Using fallback URL:", baseURL);
}

const API = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;