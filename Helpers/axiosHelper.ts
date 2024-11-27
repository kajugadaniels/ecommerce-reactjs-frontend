import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');
let baseURL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = process.env.NEXT_PUBLIC_BASE_URL;
} else {
  baseURL = process.env.NEXT_PUBLIC_BASE_URL;
}

const apiCaller = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json, multipart/form-data',
    Authorization: token !== undefined ? `Bearer ${token}` : '',
  },
});

apiCaller.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (typeof window !== 'undefined' && error?.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default apiCaller;
