// src/api/index.js (The file you import as '../api')

import axios from 'axios';

// Access the variable using import.meta.env and the VITE_ prefix
// Fallback to a default URL if VITE_API_URL is not defined
let baseURL = import.meta.env.VITE_API_URL || 'https://doctor-mern-kzd5.onrender.com/api';

// Ensure baseURL doesn't have trailing slash and ends with /api
baseURL = baseURL.trim().replace(/\/+$/, ''); // Remove trailing slashes
if (!baseURL.endsWith('/api')) {
  baseURL = baseURL.endsWith('/') ? baseURL + 'api' : baseURL + '/api';
}

// Prevent localhost URLs in production
if (baseURL.includes('localhost') || baseURL.includes('127.0.0.1')) {
  console.warn("Localhost URL detected, using production fallback");
  baseURL = 'https://doctor-mern-kzd5.onrender.com/api';
}

console.log("API Base URL:", baseURL);

const API = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;