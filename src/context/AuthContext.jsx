import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [nivelAcceso, setNivelAcceso] = useState('publico');

  // Verificar autenticación al cargar
  useEffect(() => {
    const savedAccess = localStorage.getItem('nivelAcceso');
    if (savedAccess) {
      setNivelAcceso(savedAccess);
    }
  }, []);

  // Función para login
  const login = (nivel) => {
    setNivelAcceso(nivel);
    localStorage.setItem('nivelAcceso', nivel);
  };

  // Función para logout
  const logout = () => {
    setNivelAcceso('publico');
    localStorage.removeItem('nivelAcceso');
  };

  return (
    <AuthContext.Provider value={{ nivelAcceso, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}