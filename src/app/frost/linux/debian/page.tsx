"use client";

import { Box } from "@mui/material";
import { GridsBg } from "@/components/GridsBg";

export default function DebianPage() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: 'background.default', color: 'text.primary', position: 'relative' }}>
      <GridsBg />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-8">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Debian Overview
        </h1>

        {/* Intro */}
        <p className="mb-4 text-gray-300">
          For Debian users, <code className="bg-gray-800 px-1 rounded">apt-cacher-ng</code> is available at <b>:9999</b>.
        </p>

        <p className="mb-4 text-gray-300">
          For convenience, <code className="bg-gray-800 px-1 rounded">/debian</code> and <code className="bg-gray-800 px-1 rounded">/debian-backports</code>
          are transparently proxied via <code className="bg-gray-800 px-1 rounded">apt-cacher-ng</code> to Debian archives.
        </p>

        <p className="mb-4 text-gray-300">
          Debian has discontinued <code className="bg-gray-800 px-1 rounded">debian-volatile</code> but an archived copy is available at{" "}
          <a href="http://archive.debian.org" target="_blank" className="text-blue-300 hover:text-blue-400 underline">
            archive.debian.org
          </a>.
        </p>

        {/* Repository Setup */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">Repository Setup</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
          {`deb http://repo.iiitdm.ac.in/debian <release> main contrib non-free`}
        </pre>

        {/* APT Configuration */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">APT Configuration</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
          {`Acquire::http { Proxy "http://repo.iiitdm.ac.in:9999"; };`}
        </pre>

        {/* Selective Usage */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">Selective Usage</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
          {`apt-get -o 'Acquire::http::Proxy="http://repo.iiitdm.ac.in:9999"' install love`}
        </pre>

        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
          {`deb http://repo.iiitdm.ac.in:9999/ftp.debian.org/debian <release> main`}
        </pre>
      </div>
    </Box>
  );
}