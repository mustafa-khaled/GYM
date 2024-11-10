import axios from "./axios";

export async function subscribeToPackage({ packageId, paymentMethod }) {
  const token = localStorage.getItem("GYM_USER_TOKEN");

  try {
    const response = await axios.post(
      "subscribe",
      {
        package_id: packageId,
        payment_method: paymentMethod,
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
