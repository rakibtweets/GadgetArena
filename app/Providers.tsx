'use client';

import React from 'react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/context/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}
