import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export const getUsersMemoirs = async () => {
  const res = await api.get("/userprofile");
  return res.data;
};

export const createMemoir = async (formData) => {
  const res = await api.post("/memoirs", {memoirs: formData});
  return res.data;
}