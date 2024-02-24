import axios from "axios";

const URL1 = process.env.NEXT_PUBLIC_API_URL + "/faq";
const URL2 = process.env.NEXT_PUBLIC_API_URL + "/testimonial";
const URL3 = process.env.NEXT_PUBLIC_API_URL + "/admin";

export const getFAQs = () => {
  return axios.get(URL1);
};

export const updateFAQ = (id, data) => {
  return axios.put(`${URL1}/${id}`, data);
};

export const deleteFAQ = (id) => {
  return axios.delete(`${URL1}/${id}`);
};

export const createFAQ = (data) => {
  return axios.post(URL1, data);
};

export const getTestimonials = () => {
  return axios.get(URL2);
};

export const updateTestimonial = (id, data) => {
  return axios.put(`${URL2}/${id}`, data);
};

export const createTestimonial = (data) => {
  return axios.post(URL2, data);
};

export const uploadImage = (data) => {
  return axios.post(URL2 + "/upload-img", data);
};

export const deleteTestimonial = (id) => {
  return axios.delete(`${URL2}/${id}`);
};

export const getChartsData = () => {
  return axios.get(URL3 + "/charts");
};
