"use client";

import { useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollToTopProps {
  children?: ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop; 