'use client';

import React from 'react';

export default function TeamsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Microsoft Teams
        </h1>

        <div className="prose prose-invert max-w-none">
          <p>
            Microsoft Teams is an application that can be used for online
            teaching, meeting and other collaboration related needs. Teams is
            part of Microsoft Office which IIITDM has subscription. You will
            need to use your IIITDM Kerbos username (xxx@iiitd.ac.in) and
            password to access all the functions.
          </p>
          <p>
            Open this link ({" "}
            <a
              href="https://csc.iiitdm.ac.in/services-software-windows-os"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://csc.iiitdm.ac.in/services-software-windows-os
            </a>{" "}
            ) and read the instructions. We have access to other applications
            beyond Teams.
          </p>
          <p>
            You can download Teams both desktop and mobile versions (
            <a
              href="https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/download-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/download-app
            </a>{" "}
            ).
          </p>
          <p>
            You may like to see these starter videos to learn about using the
            teams, after logged in:
          </p>
          <p>
            <a
              href="https://support.office.com/en-us/article/microsoft-teams-video-training-4f108e54-240b-4351-8084-b1089f0d21d7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://support.office.com/en-us/article/microsoft-teams-video-training-4f108e54-240b-4351-8084-b1089f0d21d7
            </a>
          </p>
          <p>Without log in, you can access Tutorial Videos</p>
          <p>
            Teams allows to add-on or integrate multiple apps. View list of
            apps
          </p>
          <p>
            You may like to explore OneNote. You can dictate, write equations,
            take notes and other related activities.{" "}
            <a
              href="https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app
            </a>
          </p>
          <p>
            You may also like to read the tutorial guide on using Teams for
            online meeting here: Quick Start Guide
          </p>
          <p>Future updates & best practices in MS Team</p>
        </div>
      </div>
    </div>
  );
}
