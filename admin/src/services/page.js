import axios from "axios";

axios.defaults.withCredentials = true;
const URL = process.env.NEXT_PUBLIC_API_URL + "/page";

export const getAllPages = async () => {
  return axios.get(URL);
};

export const getPage = async (slug) => {
  return axios.get(`${URL}/${slug}`);
};

export const createPage = async (page) => {
  return axios.post(URL, page);
};

export const updatePage = async (page) => {
  return axios.put(URL, page);
};

export const deletePage = async (slug) => {
  return axios.delete(`${URL}/${slug}`);
};
