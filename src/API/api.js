import axios from "axios";

export const userRegister = async (data) =>
  await axios.post(
    `https://hellcarengine.onrender.com/api/user/registration`,
    data
  );

export const LoginApi = async (data) =>
  await axios.post(`https://hellcarengine.onrender.com/api/user/login`, data);

// Car Model------------------

// Create a Car
export const CreateNewCar = async (data) =>
  await axios.post(
    `https://hellcarengine.onrender.com/api/cars/create-car`,
    data
  );

// Get Cars

export const DisplayCar = async () =>
  await axios.get(`https://hellcarengine.onrender.com/api/cars/my-car`);
