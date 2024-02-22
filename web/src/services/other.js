import axios from "axios";

const URL1 = process.env.NEXT_PUBLIC_API_URL + "/faq";
const URL2 = process.env.NEXT_PUBLIC_API_URL + "/testimonial";

export const getFAQs = () => {
  return axios.get(URL1);
};

export const getTestimonials = () => {
  return axios.get(URL2);
};
