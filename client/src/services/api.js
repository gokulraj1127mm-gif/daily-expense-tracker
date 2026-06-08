import axios from "axios";

const API = axios.create({
  baseURL: "https://daily-expense-tracker-1-itnv.onrender.com/api",
});

export default API;