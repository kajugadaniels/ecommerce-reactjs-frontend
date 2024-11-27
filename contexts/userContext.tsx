"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}
type userData = {
  firstname: string;
  lastname: string;
  email: string;
};

type userContextType = {
  userData: userData | undefined;
  setUserData: React.Dispatch<React.SetStateAction<userData>>;
};

const defaultUserData: userData = {
  firstname: "",
  lastname: "",
  email: "",
};

const userContext = createContext<userContextType>({
  userData: defaultUserData,
  setUserData: () => {},
});
export const useUserContext = () => useContext(userContext);

export function UserProvider({ children }: Props) {
  const [userData, setUserData] = useState<userData>(defaultUserData);

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
}
