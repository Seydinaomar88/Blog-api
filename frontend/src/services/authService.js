import apiClient from "../api/apiClient";

export const registerUser = async ({ userData }) => {
  const response = await apiClient.post("/register", { userData });
  return response.data;
};

export const loginUser = async ({ userData }) => {
  const response = await apiClient.post("/login", { userData });
  return response.data;
};
