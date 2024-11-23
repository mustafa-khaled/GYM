import axios from "./axios";

export async function userQuestions(date) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post("user-questions", date, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function answerQuestions({ date, answers }) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  console.log("data", answers);
  // try {
  //   const response = await axios.post("answer-questions", data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
}

export async function userWeeklyQuestions(weekNumber) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`user-weekly-questions/${weekNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function answerWeekEvaluation(data) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(
      "answer-week-questions",
      {
        front_image: "",
        back_image: "",
        question_id: "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
