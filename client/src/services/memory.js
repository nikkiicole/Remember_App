import axios from "axios";

export const createMemoir = async () => {
  const res = await api.post(`/memoirs/${id}/memories`);
  return res.data;
}