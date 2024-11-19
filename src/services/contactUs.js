import axios from "./axios";

/* ADD CONTACT */
export async function addContact({ data }) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(`add-contact`, data, {
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
