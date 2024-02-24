import axios from "axios";

axios.defaults.withCredentials = true;
const URL = process.env.NEXT_PUBLIC_API_URL + "/user";

export const registerUser = (data) => {
  return axios.post(URL + "/signup", data);
};

export const loginUser = (data) => {
  return axios.post(URL + "/login", data);
};

export const googleLogin = (data) => {
  return axios.post(URL + "/googlelogin", data);
};

export const logoutUser = () => {
  return axios.get(URL + "/logout");
};

export const getUser = () => {
  return axios.get(URL + "/me");
};

export const getUsers = (page) => {
  return axios.get(URL + `?page=${page}`);
};
