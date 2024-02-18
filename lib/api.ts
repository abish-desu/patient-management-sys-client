import axios, { AxiosError } from "axios";
export const API_SERVER_URL: string = `${process.env.NEXT_API_URL}`;

const api = axios.create({
  baseURL: API_SERVER_URL,
});
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errRes: any = error.response && error.response?.data;

    return Promise.reject(errRes || "Server Failure!");
  }
);
export default api;
