import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "").endsWith("/api")
    ? import.meta.env.VITE_API_URL?.replace(/\/$/, "")
    : `${import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000"}/api`;

const API = axios.create({
  baseURL: apiBaseUrl,
});

// Add token automatically to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
