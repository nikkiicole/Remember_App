import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export const getUsersMemoirs = async () => {
  const res = await api.get("/userprofile");
  return res.data;
};

export const createMemoir = async () => {
  const res = await api.post("/memoirs");
  return res.data;
}