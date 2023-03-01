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

// Update Car
export const UpdateCar = async (id, data) =>
  await axios.put(
    `https://hellcarengine.onrender.com/api/cars/update-car/${id}`,
    data
  );

// Delete Car
export const DeleteCar = async (id) =>
  await axios.delete(
    `https://hellcarengine.onrender.com/api/cars/delete-car/${id}`
  );

// Update Car
export const updateOffer = async (id, data) =>
  await axios.put(
    `https://hellcarengine.onrender.com/api/cars/offer-car/${id}`,
    data
  );

// Search API

export const SearchAPI = async (brand, set, minP, maxP) =>
  await axios.get(
    `https://hellcarengine.onrender.com/api/cars/search-car?brand=${brand}&set=${set}&minP=${minP}&maxP=${maxP}`
  );
