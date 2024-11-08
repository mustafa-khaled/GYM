import axios from "./axios";

export async function getUserExercises() {
  try {
    const response = await axios.get("user-exercises");

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
