import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://zenroute.onrender.com/',
});

export default axiosInstance;
