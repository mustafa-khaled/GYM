import axios from "./axios";

export async function getUserExercises() {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get("user-exercises", {
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

export async function getUserExerciseByMuscle(id) {
  try {
    const response = await axios.get(`user-exercises-by-muscle/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
}
