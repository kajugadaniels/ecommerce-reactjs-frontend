import apiCaller from './axiosHelper';

// Register User
export const registerUser = async (data: any) => {
  try {
    const response = await apiCaller.post('/auth/register', data);
    return response;
  } catch (e: any) {
    return e.response;
  }
};

// Login User
export const loginUser = async (data: any) => {
  try {
    const response = await apiCaller.post('/auth/login', data);
    return response;
  } catch (e: any) {
    return e.response;
  }
};

