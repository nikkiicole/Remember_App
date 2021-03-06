import api from "./auth"

let token = localStorage.getItem("authToken")

export const getPhotos = async (id) => {
  const res = await api.get(`/memoirs/${id}`);
  return res.data;
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