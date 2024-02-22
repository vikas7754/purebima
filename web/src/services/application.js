import axios from "axios";

axios.defaults.withCredentials = true;
const URL = process.env.NEXT_PUBLIC_API_URL + "/application";

export const submitApplication = (data) => {
  return axios.post(URL, data);
};
