import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://127.0.0.1:8000/api/';

// Create an Axios instance
const apiCaller = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Add a request interceptor to include the token if available
apiCaller.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle unauthorized errors
apiCaller.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (typeof window !== 'undefined' && error?.response?.status === 401) {
      console.error('Unauthorized error detected:', error.response.data);
      // Optionally, you can toast an error here
      // Redirect to login page if unauthorized
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default apiCaller;
