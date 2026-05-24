"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { initializeFirebase } from './client';

const FirebaseContext = createContext<ReturnType<typeof initializeFirebase> | null>(null);

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const firebaseInstance = initializeFirebase();
  return (
    <FirebaseContext.Provider value={firebaseInstance}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within FirebaseClientProvider');
  }
  return context;
}
