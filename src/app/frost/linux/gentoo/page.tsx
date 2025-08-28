"use client";

import { Box } from "@mui/material";

export default function GentooPage() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: 'background.default', color: 'text.primary', position: 'relative', py: 8 }}>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-8">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Gentoo Overview
        </h1>

        {/* Intro */}
        <p className="mb-4 text-gray-300">
          This mirror is configured to provide rsync access for the Gentoo portage system.
          To use the mirror for emerge sync and downloading distfiles, add the following to{" "}
          <code className="bg-gray-800 px-1 rounded">/etc/make.conf</code>:
        </p>

        {/* Code Block */}
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg mt-3 overflow-x-auto">
          {`SYNC="rsync://repo.iiitdm.ac.in/gentoo-portage"
GENTOO_MIRRORS="http://repo.iiitdm.ac.in/gentoo"`}
        </pre>
      </div>
    </Box>
  );
}
