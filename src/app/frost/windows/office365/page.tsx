'use client';

import React from 'react';
import { Box } from "@mui/material";

export default function Office365Page() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: 'background.default', color: 'text.primary', position: 'relative', py: 8 }}>
      <div className="relative z-10 max-w-4xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Microsoft Office 365
        </h1>

        <div className="prose prose-invert max-w-none">
          <p>
            IIITDMK has subscribed the Microsoft 365 for a along with
            Microsoft Campus Agreement for all faculty, staff and students.
            "Microsoft Office 365" refers to subscription plans that include
            access to Office applications plus other productivity services that
            are enabled over the Internet (cloud services) on cloud storage
            OneDrive. It also include the desktop version of the latest Office
            applications, which users can install across multiple computers and
            devices. The fully installed applications include: Word, Excel,
            PowerPoint, OneNote, Outlook, Publisher, and Access (Publisher and
            Access are available on PC only) and you can install them across
            multiple devices, including PCs, Macs, Android tablets, Android
            phones, iPad, and iPhone. When you have an active Office 365
            subscription that includes the desktop version of Office, you always
            have the most up-to-date version of the applications. To use and
            install one has to login at{' '}
            <a
              href="https://office.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://office.com
            </a>{' '}
            using IIITDM User ID and Password.
          </p>

          <p>
            <strong>Note:</strong> Users Database is being Synced with IIITDM
            database. If someone has changed Password in IIITDM,
          </p>

          <p>
            To sign in suffix is "@iiitdm.ac.in" as if User ID is “xyz” then sign
            in user must be xyz@iiitdm.ac.in.
          </p>
        </div>
      </div>
    </Box>
  );
}
