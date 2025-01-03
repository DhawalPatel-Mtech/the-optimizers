import axiosInstance from "../config/axios.config";

export async function loginUser({ email, password }) {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axiosInstance.post("auth/login", data);
    console.log("Data posted:", response.data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
