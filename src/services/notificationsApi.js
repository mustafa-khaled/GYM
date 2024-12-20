import axios from "./axios";

export async function getUserNotifications() {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get("notifications", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserNotificationsMeasurements(weekNumber) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`measurements/${weekNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWeightEvaluation(weekNumber) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`weight-evaluation/${weekNumber}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getQuestionEvaluation(currentWeek) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`question-evaluation/${currentWeek}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
