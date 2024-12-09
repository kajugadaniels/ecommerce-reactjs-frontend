'use client';
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  accountType: string;
  verified: boolean;
  dob: string;
  createdOn: string;
  deletedOn: string | null;
  lockTime: string | null;
  lastLogin: string;
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

  const logout = () => {
    setUserData(null);
    setToken(null);
    // Optionally, redirect to login page
    window.location.href = '/signin';
  };

  return (
    <userContext.Provider value={{ userData, setUserData, token, setToken, logout }}>
      {children}
    </userContext.Provider>
  );
}
