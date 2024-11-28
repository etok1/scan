import axios from "axios";

export const API_URL = "https://gateway.scan-interfax.ru";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
