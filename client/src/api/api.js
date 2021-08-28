const axios = require("axios");
// const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getTables = async () => {
  try {
    const res = await axios.get("/tables");
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getDashBoard = async (hospital) => {
  try {
    const res = await axios.get(`/dashboard/${hospital}`);
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getPurchase = async (hospital) => {
  try {
    const res = await axios.get(`/purchase/${hospital}`);
    return res.data
  } catch (e) {
    console.log(e)
  }
}