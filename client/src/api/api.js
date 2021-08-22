const axios = require("axios");
// const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getTables = async () => {
  try {
    const res = await axios.get("/tables");
    // console.log(res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}