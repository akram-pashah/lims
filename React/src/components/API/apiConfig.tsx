import axios from "axios";

const APIConfig = {
  apiUrl: "http://localhost:5137", //local
};

export const api = axios.create({
  baseURL: APIConfig.apiUrl,
});

export default APIConfig;
