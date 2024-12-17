import apiCaller from './axiosHelper';

// Register User
export const registerUser = async (data: any) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = data;
    const payload = {
      name: `${firstName} ${lastName}`,
      email: email,
      phone_number: phoneNumber,
      password: password,
    };
    const response = await apiCaller.post('/auth/register/', payload);
    return response;
  } catch (e: any) {
    console.error('Register User Error:', e.response || e.message);
    return e.response;
  }
};

// Login User
export const loginUser = async (data: any) => {
  try {
    const { identifier, password } = data;
    const payload = {
      identifier: identifier,
      password: password,
    };
    const response = await apiCaller.post('/auth/login/', payload);
    return response;
  } catch (e: any) {
    console.error('Login User Error:', e.response || e.message);
    return e.response;
  }
};

// Logout User
export const logoutUser = async (token: string) => {
  try {
    const response = await apiCaller.post('/auth/logout/', null, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (e: any) {
    console.error('Logout User Error:', e.response || e.message);
    return e.response;
  }
};

export const getHighPricedProducts = async () => {
  try {
    const response = await apiCaller.get('/products/', {
      params: {
        ordering: '-price',
        limit: 4,
      },
    });
    return response;
  } catch (e: any) {
    console.error('Fetch High-Priced Products Error:', e.response || e.message);
    return e.response;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await apiCaller.get('/products/');
    return response;
  } catch (e: any) {
    console.error('Fetch All Products Error:', e.response || e.message);
    return e.response;
  }
};

export const getCategories = async () => {
  try {
    const response = await apiCaller.get('/categories/');
    return response;
  } catch (e: any) {
    console.error('Fetch Categories Error:', e.response || e.message);
    return e.response;
  }
};