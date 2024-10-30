import axios from "./axios";

export async function getGoals() {
  try {
    const response = await axios.get("goals");

    return response.data;
  } catch (error) {
    throw error;
  }
}
