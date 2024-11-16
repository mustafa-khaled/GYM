import axios from "./axios";

export async function getUserExercises(selectedDate) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`exercise-by-date/${selectedDate}`, {
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
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`exercise/${id}`, {
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
/******************************************************************************/
/* ADD NEW ROUND */
export async function addRound({ exerciseId, data }) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(`add-round/${exerciseId}`, data, {
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
/******************************************************************************/
/* EDIT EXIST ROUND */
export async function editExistRound({ roundId, data }) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(`update-round/${roundId}`, data, {
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
/******************************************************************************/
/* COMPLETE ROUND */
export async function completeRound(roundId) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(
      `complete-round/${roundId}`,
      null, // No request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
/******************************************************************************/
/* DELETE CERTAIN ROUND */
export async function deleteCertainRound(id) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.delete(`delete-round/${id}`, {
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

export async function completeExercise(exerciseId) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(
      `complete-exercise/${exerciseId}`,
      null, // No request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
