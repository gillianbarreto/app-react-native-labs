import axios from "axios";

export const destinationsApi = axios.create({
  baseURL: "https://mytinerary-server.onrender.com/api/",
});
