// src/contexts/UserContext.tsx
import React, { createContext, useContext } from 'react';
import type { User } from '../models/User';

interface UserContextType {
  currentUserId: string;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const currentUserId = 'u0'; 

  return (
    <UserContext.Provider value={{ currentUserId }}>
      {children}
    </UserContext.Provider>
  );
};
