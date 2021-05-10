import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export const getMemories = async (id) => {
  const res = await api.get(`/memoirs/${id}/memories`);
  return res.data;
};