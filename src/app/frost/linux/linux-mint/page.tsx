"use client";

import { Box } from "@mui/material";
import { GridsBg } from "@/components/GridsBg";

export default function LinuxMint() {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: 'background.default', color: 'text.primary', position: 'relative' }}>
      <GridsBg />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-8">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Linux Mint Overview
        </h1>

        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">Overview</h2>
          <p className="mb-4 text-gray-300">
            Linux Mint Debian Edition (LMDE) is a semi-rolling release distribution based on Debian.
            Instead of the traditional Ubuntu base, LMDE aims to provide the same Mint experience
            directly on top of Debian.
          </p>
          <p className="mb-4 text-gray-300">
            Since LMDE uses the Debian package format,{" "}
            <code className="bg-gray-800 px-1 rounded">apt-cacher-ng</code> should work.
            Please refer to the Debian section for more details.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Based on Debian instead of Ubuntu</li>
            <li>Semi-rolling release model</li>
            <li>Same Cinnamon desktop experience as Linux Mint</li>
            <li>Uses Debian’s APT package management</li>
          </ul>
        </section>

        {/* Downloads Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">Downloads</h2>
          <p className="mb-4 text-gray-300">
            Official ISO images and torrents can be downloaded from the{" "}
            <a
              href="https://www.linuxmint.com/download_lmde.php"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Linux Mint website
            </a>
            .
          </p>
        </section>
      </div>
    </Box>
  );
}
