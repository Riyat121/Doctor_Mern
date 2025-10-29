// src/api/index.js (The file you import as '../api')

import axios from 'axios';

// Access the variable using import.meta.env and the VITE_ prefix
const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  console.error("VITE_API_URL is not defined in the environment.");
}

const API = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;