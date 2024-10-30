import axios from "./axios";

export async function getMedicalIssues() {
  try {
    const response = await axios.get("medical-issues");

    return response.data;
  } catch (error) {
    throw error;
  }
}
