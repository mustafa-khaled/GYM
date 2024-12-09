import axios from "./axios";

export async function getUserDietByDate(date) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(
      "user-diet",
      {
        date: date,
      },
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

export async function updateMealQuantity(data) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(`update-meal-quantity`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function searchForMeal(data) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(`search`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addNewMeal(data) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(`new-meal`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMealById(id) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`meal/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function copyMeal({ id }) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get(`copy-meal/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
