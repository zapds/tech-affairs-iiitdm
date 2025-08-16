// app/layout.tsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';
import './globals.css'

import { ThemeProvider } from '@/context/ThemeContext';
import { ReactLenis } from 'lenis/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCurrentSession } from '@/lib/server/session';
import { GridsBg } from '@/components/GridsBg'; // <-- client component
import ScrollToTop from '@/components/ScrollToTop';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getCurrentSession(); // ✅ runs on server

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ReactLenis root />
        <ThemeProvider>
          <GridsBg />
          <ScrollToTop />
          <ScrollToTopButton />
          <Navbar user={user} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
