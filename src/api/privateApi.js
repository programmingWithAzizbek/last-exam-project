import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = `Xg5XCjz4AB1tGDnDJwYcfFBPnSSH6njcs7-AcSFu0sw`;
//import.meta.env.VITE_ACCESS_KEY

const privateApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const getRandomPhotos = async (count = 30) => {
  try {
    const response = await privateApi.get(`/photos/random?count=${count}`);
    return response.data;
  } catch (error) {
    console.error("Xatolik:", error);
    return [];
  }
};

export default privateApi;
