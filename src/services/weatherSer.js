import axios from "axios";

import { apiUrl } from "../util/config";

export const fetchWeather = (query) => {
  return axios.post(apiUrl, { location: query });
};
