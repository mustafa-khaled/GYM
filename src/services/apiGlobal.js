import axios from "./axios";

export async function getGlobalData() {
  try {
    const response = await axios.get("home");

    return response.data;
  } catch (error) {
    throw error;
  }
}
