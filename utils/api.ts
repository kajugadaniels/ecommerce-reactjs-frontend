// src/utils/axios.ts
import axios from 'axios';

// Create an Axios instance with default configurations
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api', // Adjust the baseURL as needed
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers if available
api.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
