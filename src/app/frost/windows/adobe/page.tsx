'use client';

import React from 'react';

export default function AdobePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Adobe Creative Cloud
        </h1>

        <div className="prose prose-invert max-w-none">
          <p>
            IIITDM has subscribed the Adobe creative cloud licences for all
            active faculty, staff and students. "Adobe Creative cloud" refers
            to subscription plan that include access to all major Adobe
            Products such as Acrobat Reader, Photoshop, Illustrator, Premiere
            Pro, Lightroom, with 100GB of storage per user. It includes the
            desktop version of the latest Adobe applications, which users can
            install them across multiple devices, including PCs, Macs, Android
            tablets, Android phones, iPad, and iPhone. When you have an Adobe
            creative cloud subscription it includes the most up-to-date version
            of the applications. To start using Creative Cloud Shared Device
            Access for Higher Education, use "user@department.iiitdm.ac.in" to
            sign in to Adobe at:{" "}
            <a
              href="https://account.adobe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://account.adobe.com/
            </a>{" "}
            Users shall receive an OTP on their mail, and after entering the
            OTP, the user can set up a password and start using Adobe
            products. It’s recommended to download Creative cloud application
            from where users can manage all Adobe products.
          </p>
        
        </div>
      </div>
    </div>
  );
}
