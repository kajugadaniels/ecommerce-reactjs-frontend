import axios from 'axios';

// Get the base URL from environment variables
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// Create an Axios instance
const apiCaller = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Add a request interceptor to include the token
apiCaller.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
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
