// src/api/index.js (The file you import as '../api')

import axios from 'axios';

// Access the variable using import.meta.env and the VITE_ prefix
// Fallback to a default URL if VITE_API_URL is not defined
let baseURL = import.meta.env.VITE_API_URL || 'https://doctor-mern-kzd5.onrender.com/api';

// Prevent localhost URLs in production
if (baseURL.includes('localhost') || baseURL.includes('127.0.0.1')) {
  console.warn("Localhost URL detected, using production fallback");
  baseURL = 'https://doctor-mern-kzd5.onrender.com/api';
}

// Normalize the URL - remove trailing slashes
baseURL = baseURL.trim().replace(/\/+$/, '');

// If the URL already contains /api/auth, remove it and set to just /api
// This handles cases where VITE_API_URL is incorrectly set to /api/auth
if (baseURL.includes('/api/auth')) {
  baseURL = baseURL.replace(/\/api\/auth.*$/, '/api');
  console.warn("Removed /api/auth from baseURL, using:", baseURL);
}

// If baseURL doesn't end with /api, add it (but only if it's not already a full path)
if (!baseURL.endsWith('/api') && !baseURL.includes('/api/')) {
  baseURL = baseURL + '/api';
}

console.log("API Base URL:", baseURL);

const API = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;