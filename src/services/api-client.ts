import axios, { CanceledError } from "axios";

const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export { CanceledError };
export default axiosClient;