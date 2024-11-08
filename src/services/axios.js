import axios from "axios";

const baseURL = "https://gym-backend.gym-api.online/api/";

export default axios.create({
  baseURL: baseURL,
});
