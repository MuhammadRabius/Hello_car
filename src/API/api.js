import axios from "axios";

export const userRegister = async (data) =>
  await axios.post(`http://localhost:8000/api/user/registration`, data);

export const LoginApi = async (data) =>
  await axios.post(`http://localhost:8000/api/user/login`, data);
