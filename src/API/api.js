import axios from "axios";

export const userRegister = async (data) =>
  await axios.post(`https://hellcarengine.onrender.com/registration`, data);

export const LoginApi = async (data) =>
  await axios.post(`https://hellcarengine.onrender.com/api/user/login`, data);

export const CreateNewCar = async (data) =>
  await axios.post(
    `https://hellcarengine.onrender.com/api/cars/create-car`,
    data
  );
