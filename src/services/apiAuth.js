import axios from "./axios";

export async function login({ email, password }) {
  try {
    const response = await axios.post("login", {
      email,
      password,
      device_id: null,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function signUp(userData) {
  try {
    const response = await axios.post("register", userData, {
      headers: {
        Authorization: `Bearer `,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function storeToken(deviceId) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(
      "store-token",
      {
        device_id: deviceId,
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

export async function subscribeDuration() {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.get("subscribe-duration", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
