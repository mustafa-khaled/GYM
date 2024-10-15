import axios from "./axios";

export async function login({ email, password }) {
  try {
    const response = await axios.post("", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function signUp(userData) {
  console.log(userData);

  try {
    const response = await axios.post("", {
      userData,
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
