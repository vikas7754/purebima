import axios from "axios";
axios.defaults.withCredentials = true;
const URL = process.env.NEXT_PUBLIC_API_URL + "/blog";

export const getAllBlogs = async () => {
  return axios.get(URL);
};

export const getBlog = async (slug) => {
  return axios.get(`${URL}/${slug}`);
};

export const createBlog = async (blog) => {
  return axios.post(URL, blog);
};

export const updateBlog = async (blog, id) => {
  return axios.put(`${URL}/${id}`, blog);
};

export const deleteBlog = async (id) => {
  return axios.delete(`${URL}/${id}`);
};

export const uploadFile = async (file) => {
  return axios.post(`${URL}/upload-file`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
