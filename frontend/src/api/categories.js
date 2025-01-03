import axiosInstance from "../config/axios.config";

export async function fetchData(type) {
  try {
    const response = await axiosInstance.get(`categories?type=${type}`);
    console.log("Data fetched:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
