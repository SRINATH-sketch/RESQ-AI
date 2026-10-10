import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USER, MOCK_DRIVERS } from '../data/mockData';
import { api } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('resqai_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      ...MOCK_USER,
      role: 'patient',
      isAuthenticated: true
    };
  });

  const [currentDriver, setCurrentDriver] = useState(() => {
    const saved = localStorage.getItem('resqai_driver');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      ...MOCK_DRIVERS[0],
      isOnline: true,
      isAuthenticated: true
    };
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('resqai_user', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentDriver) {
      localStorage.setItem('resqai_driver', JSON.stringify(currentDriver));
    }
  }, [currentDriver]);

  const loginUser = async (credentials) => {
    const res = await api.login(credentials);
    if (res.success) {
      const user = { ...MOCK_USER, ...res.user, isAuthenticated: true };
      setCurrentUser(user);
      return user;
    }
    throw new Error('Login failed');
  };

  const loginDriver = async (credentials) => {
    const res = await api.login({ ...credentials, role: 'driver' });
    if (res.success) {
      const driver = { ...MOCK_DRIVERS[0], ...res.user, isOnline: true, isAuthenticated: true };
      setCurrentDriver(driver);
      return driver;
    }
    throw new Error('Driver login failed');
  };

  const toggleDriverOnline = () => {
    setCurrentDriver((prev) => ({
      ...prev,
      isOnline: !prev.isOnline
    }));
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('resqai_user');
  };

  const logoutDriver = () => {
    setCurrentDriver(null);
    localStorage.removeItem('resqai_driver');
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentDriver,
        loginUser,
        loginDriver,
        logoutUser,
        logoutDriver,
        toggleDriverOnline,
        setCurrentUser,
        setCurrentDriver
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
