import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

let token = localStorage.getItem("authToken")

export const getMemories = async (id) => {
  const res = await api.get(`/memoirs/${id}`);
  return res.data.memories;
};

export const createMemory = async (id, formData) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.post(`/memoirs/${id}/memories`, formData);
  return res.data;
}

export const deleteMemory = async (id) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.delete(`/memoirs/${id}/memories/${id}`);
  return res.data;
};
export const editMemory = async (id, formData) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.put(`/memoirs/${id}/memories/${id}`, formData);
  return res.data;
}