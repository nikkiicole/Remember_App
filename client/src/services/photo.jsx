import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export const getPhotos = async (id) => {
  const res = await api.get(`/memoirs/${id}`);
  return res.data.photos;
};
