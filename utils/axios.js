// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-api-url.com", // ← change to actual API endpoint
});

export default instance;
