
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';

import { ThemeProvider } from '@/context/ThemeContext';
import { ReactLenis } from 'lenis/react'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ReactLenis root />
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}