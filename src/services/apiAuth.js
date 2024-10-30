import axios from "./axios";

export async function login({ email, password }) {
  try {
    const response = await axios.post("login", {
      email,
      password,
      device_id: "x",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function signUp(userData) {
  console.log(userData);

  try {
    const response = await axios.post("register", userData, {
      headers: {
        Authorization: `Bearer`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function logout(id) {
  try {
    const response = await axios.post(``);
    return response.data;
  } catch (error) {
    throw error;
  }
}
