import axios from 'axios';

function handleError(error: any) {
  return Promise.reject(error);
}

const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

service.interceptors.request.use(
  config => {
    // SET Token or do something

    return config;
  },
  error => Promise.reject(error)
);

service.interceptors.response.use(response => response, handleError);

export default service;
