import axios from "./axios";

export async function getGlobalData() {
  const token = localStorage.getItem("GYM_USER_TOKEN");
  try {
    const response = await axios.get("home", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
