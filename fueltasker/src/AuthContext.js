import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext(null);

// Export a hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const login = () => {
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  