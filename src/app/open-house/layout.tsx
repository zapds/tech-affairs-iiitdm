import React from 'react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-open-house',
});

export default function OpenHouseLayout({ children }: { children: React.ReactNode }) {
    return <div className={bricolage.variable}>{children}</div>;
}
