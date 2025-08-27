"use client";
import React from "react";

export default function UbuntuPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Page Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-8 sm:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <img
            src="/linux/ubuntu-logo.png"
            alt="Ubuntu Logo"
            className="h-20 w-20 object-contain"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
            Ubuntu
          </h1>
        </div>

        {/* Description */}
        <p className="mb-12 text-gray-300 text-lg leading-relaxed">
          Ubuntu is the most used Linux flavour on campus, supporting a
          significant chunk of our critical infrastructure.
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              Overview
            </h2>
            <p className="mb-3 text-gray-300">
              This mirror is in full compliance with official guidelines, and
              the maximum delay in updates reaching this server is{" "}
              <strong>6 hours</strong>.
            </p>
            <p className="mb-2">
              <a
                href="https://ubuntu.com/about/release-cycle"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Support status of releases is listed here
              </a>
              .
            </p>
          </section>

          {/* Supported Releases */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              Supported Releases
            </h2>
            <p className="mb-3 text-gray-300">
              CD Images of all supported releases can be obtained{" "}
              <a
                href="http://cdimage.ubuntu.com"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <p className="text-gray-300">
              Repositories of all officially supported releases are mirrored{" "}
              <a
                href="http://repo.iitd.ernet.in/ubuntu"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                here
              </a>
              . EOL releases stop functioning to force users to upgrade.
            </p>
          </section>

          {/* Releases past EOL */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              Releases past EOL
            </h2>
            <p className="mb-3 text-gray-300">
              Legacy software may still need to be run. CD Images of all EOL
              releases:{" "}
              <a
                href="http://old-releases.ubuntu.com/releases/"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <p className="mb-3 text-gray-300">
              All EOL releases are available{" "}
              <a
                href="http://old-releases.ubuntu.com/ubuntu/"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                here
              </a>
              . Users should understand the{" "}
              <strong>security implications</strong>.
            </p>
            <p className="text-gray-300">
              Requests to EOL repos are transparently proxied to the Ubuntu old
              releases archive; intermediate directories are not browsable.
            </p>
          </section>

          {/* APT Configuration */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              APT Configuration
            </h2>
            <p className="mb-4 text-gray-300">
              Replace <code>&lt;release&gt;</code> with your Ubuntu version in
              your <code>sources.list</code>.
            </p>
            <pre className="bg-gray-900 border border-blue-900 text-green-400 p-5 rounded-xl overflow-x-auto shadow-lg">
{`deb http://repo.iiitdm.ernet.in/ubuntu <release> main restricted universe multiverse
deb http://repo.iiitdm.ernet.in/ubuntu <release>-updates main restricted universe multiverse
deb http://repo.iiitdm.ernet.in/ubuntu <release>-security main restricted universe multiverse
# deb http://repo.iiitdm.ernet.in/ubuntu <release>-backports main restricted universe multiverse
# deb http://repo.iiitdm.ernet.in/ubuntu <release>-proposed main restricted universe multiverse`}
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
}
