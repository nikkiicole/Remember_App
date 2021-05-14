import api from "./auth"

let token = localStorage.getItem("authToken")

export const getMemories = async (id) => {
  const res = await api.get(`/memoirs/${id}`);
  return res.data;
};
// export const getUserEmail = async (id) => {
//   const res = await api.get(`/memoirs/${id}`);
//   return res.data.memories;
// };

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
export const getMemory = async (id) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.get(`/memoirs/${id}/memories/${id}`);
  return res.data;
};

export const editMemory = async (id, memory_id, formData) => {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
  const res = await api.put(`/memoirs/${memory_id}/memories/${id}`, {memory: formData });
  return res.data;
}