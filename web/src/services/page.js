import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API_URL + "/page";

export const getPage = (slug) => {
  return axios.get(`${URL}/${slug}`);
};
