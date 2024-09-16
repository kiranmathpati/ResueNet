import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [useremail, setUseremail] = useState('');

  const login = (user) => {
    setUseremail(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUseremail('');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, useremail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
