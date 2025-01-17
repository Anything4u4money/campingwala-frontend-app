import React, { createContext, useState, useContext, ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode; // Allow `children` as a prop
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
