import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

let token = localStorage.getItem("authToken")

export const getPhotos = async (id) => {
  const res = await api.get(`/memoirs/${id}`);
  return res.data.photos;
};

export const createPhoto = async (id, formData) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.post(`/memoirs/${id}/photos`, formData);
  return res.data;
}

export const deletePhoto = async (id) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.delete(`/memoirs/${id}/photos/${id}`);
  return res.data;
};