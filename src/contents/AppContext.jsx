import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);  // Guarda los datos del usuario después de hacer login
  };

  const logout = () => {
    setUser(null);  // Elimina los datos del usuario al hacer logout
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
