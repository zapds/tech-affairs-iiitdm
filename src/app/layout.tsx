
"use client"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';

import { ThemeProvider, useThemeContext } from '@/context/ThemeContext';
import { ReactLenis } from 'lenis/react'
import Navbar from '@/components/Navbar';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}


export function AddGrids() {
  const { isDarkMode } = useThemeContext();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.remove('grids-dark', 'grids-light');
      document.body.classList.add(isDarkMode === true ? 'grids-dark' : 'grids-light');
    }
  }, [isDarkMode]);

  return (
    <></>
  )
}

export default function RootLayout({ children }: RootLayoutProps) {

  
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ReactLenis root />
          <ThemeProvider>
            <AddGrids />
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}