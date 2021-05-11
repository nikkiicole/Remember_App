import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

let token = localStorage.getItem("authToken")

export const getUsersMemoirs = async () => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.get("/userprofile");
  return res.data.memoirs;
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

export const searchMemoir = async (name) => {
  const res = await api.get(`/search/${name}`);
  return res.data;
}