import axios from "./axios";

export async function userQuestions(date) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post("user-questions", date, {
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

export async function answerQuestions(data ) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post("answer-questions", data, {
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
