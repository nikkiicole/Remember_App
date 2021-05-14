
import api from "./auth"

let token = localStorage.getItem("authToken")

export const getUsersMemoirs = async () => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.get("/userprofile");
  return res.data.memoirs;
};

export const getMemoirs = async () => {

  const res = await api.get("/memoirs");
  return res.data;
};

export const createMemoir = async (formData) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.post("/memoirs", formData);
  return res.data;
}

export const getMemoir = async (id) => {
  const res = await api.get(`/memoirs/${id}`);
  return res.data;
};

export const searchForMemoir = async (name) => {
  const res = await api.get(`/search/${name}`);
  return res.data;
}

export const destroyMemoir = async (id) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.delete(`/memoirs/${id}`);
  return res.data;
};

export const editMemoir = async (id, formData) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.put(`/memoirs/${id}`, formData);
  return res.data;
}