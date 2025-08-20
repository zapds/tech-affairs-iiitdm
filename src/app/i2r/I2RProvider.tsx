"use client";

import React, { createContext, useContext } from 'react';
import { User } from '@/lib/server/user';

interface I2RContextType {
  user: User;
}

const I2RContext = createContext<I2RContextType | undefined>(undefined);

export function I2RProvider({ 
  children, 
  user 
}: { 
  children: React.ReactNode; 
  user: User; 
}) {
  return (
    <I2RContext.Provider value={{ user }}>
      {children}
    </I2RContext.Provider>
  );
}

export function useI2R() {
  const context = useContext(I2RContext);
  if (context === undefined) {
    throw new Error('useI2R must be used within an I2RProvider');
  }
  return context;
}