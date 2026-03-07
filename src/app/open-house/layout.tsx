'use client';

import React, { useEffect } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-open-house',
});

export default function OpenHouseLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        document.documentElement.classList.add('oh-standalone');
        document.body.style.margin = '0';
        return () => {
            document.documentElement.classList.remove('oh-standalone');
            document.body.style.margin = '';
        };
    }, []);

    return <div className={bricolage.variable}>{children}</div>;
}
