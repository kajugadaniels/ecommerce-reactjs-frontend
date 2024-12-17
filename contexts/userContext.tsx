'use client';
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { logoutUser } from '@/Helpers/CallRequestHelper';

interface Props {
  children: ReactNode;
}

type UserData = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  gender?: string;
  date_of_birth?: string;
  status?: string;
  role?: string;
  image?: string;
  bio?: string;
  created_at?: string;
};

type UserContextType = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
};

const defaultUserData: UserData | null = null;

const userContext = createContext<UserContextType>({
  userData: defaultUserData,
  setUserData: () => {},
  token: null,
  setToken: () => {},
  logout: () => {},
});

export const useUserContext = () => useContext(userContext);

export function UserProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserData | null>(defaultUserData);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Load user data and token from localStorage on mount
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Update localStorage when userData changes
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  }, [userData]);

  useEffect(() => {
    // Update localStorage when token changes
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const logout = async () => {
    try {
      if (token) {
        await logoutUser(token);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setUserData(null);
      setToken(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      // Redirect to login page
      window.location.href = '/signin';
    }
  };

  return (
    <userContext.Provider value={{ userData, setUserData, token, setToken, logout }}>
      {children}
    </userContext.Provider>
  );
}
