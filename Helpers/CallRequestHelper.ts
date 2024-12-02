import axios from 'axios';
import apiCaller from './axiosHelper';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const PostsData = async (url: any, data: any) => {
  try {
    const response = await apiCaller.post(url, JSON.stringify(data));
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const PostData = async (url: string, data: any) => {
  try {
    const response = await apiCaller.post(`${baseURL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token !== undefined ? `Bearer ${token}` : '',
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const putData = async (url: string, data: any) => {
  try {
    const response = await apiCaller.put(`${baseURL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const postRequestFormData = async (url: string, data: any) => {
  try {
    const response = await apiCaller.post(`${baseURL}${url}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const putRequestFormData = async (url: string, data: any) => {
  try {
    const response = await apiCaller.put(`${baseURL}${url}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const patchRequest = async (url: string, data: any) => {
  try {
    const response = await apiCaller.patch(`${baseURL}${url}`, data);
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const getRequest = async (url: string, data: any) => {
  try {
    const response = await apiCaller.get(`${baseURL}${url}`, data);
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const PostNotAuth = async (url: string, data: any) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (e: any) {
    return e.response;
  }
};
export const GetRequest = async (url: any) => {
  try {
    const response = await apiCaller.get(url);
    return response;
  } catch (e: any) {
    return e.response;
  }
};

export const DeleteRequest = async (url: any) => {
  try {
    const response = await apiCaller.delete(url);
    return response;
  } catch (e: any) {
    return e.response;
  }
};
