import axios from "axios";

const production = "https://alwaysremember-api.herokuapp.com/"
const baseUrl = "http://localhost:3000";

let apiUrl;
const apiUrls = {
  development: "http://localhost:3000",
  production: "https://alwaysremember-api.herokuapp.com/"
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
const api = axios.create({
  baseURL: apiUrl,
});


export const registerUser = async (formData) => {
  const res = await api.post("/users", formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await api.post("api/v1/auth", formData);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/api/v1/auth");
    return res.data;
  }
  return false;
};