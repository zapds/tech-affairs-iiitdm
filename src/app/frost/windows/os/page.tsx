'use client';

import React from 'react';

export default function OsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
          Windows/Office Installation and Activation
        </h1>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">
            Prerequisites
          </h2>
          <p>
            Windows Volume License is for upgrades only. Before you try to
            upgrade, you must first purchase an underlying, qualifying, and
            genuine Windows license. For more information, visit the following
            Microsoft website:{' '}
            <a
              href="http://www.microsoft.com/piracy/knowthefacts/legalizationsolutions.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              http://www.microsoft.com/piracy/knowthefacts/legalizationsolutions.aspx
            </a>
          </p>
          <p>
            While procuring hardware from OEM it is important to ensure that
            you have purchased an underlying, qualifying, and genuine Windows
            license which can be upgraded under the volume license agreement.
            This may require you purchase a low cost starter kit from the OEM.
            Please get in touch with the OEM in case of any doubt. Also view
            Bios Marker Issue
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">
            Obtain the ISO image and install
          </h2>
          <p>
            Map the folder filer02.iiitdm.ac.inwinisos as a network drive in a
            Windows machine (from My Computer -{">"} Tools -{">"} Map Network
            Drive, without reconnect at login and connect using different
            credentials) using your ACADIITDuserid as your username and your
            Kerberos password. In Mac or Linux mount the CIFS share
            cifs://filer02.iiitdm.ac.in/winisos.
          </p>
          <p>
            Copy the required ISO image (CD/DVD image) and burn a CD/DVD using
            your favourite software.
          </p>
          <p>Disconnect the network drive.</p>
          <p>Install Windows OS or Office using the CD/DVD.</p>
          <p>
            Configure your Windows machine for IIITDM network using DHCP. In case
            you require to configure with a static IP, please get in touch with
            your departmental system administrators for the network parameters.
          </p>
          <p>
            Make sure that ACAD.WINDOWS.IIITDM.AC.IN is set as the DNS search
            string (suffix) from network properties.
          </p>
          <p>
            Make sure that ntp.iiitdm.ac.in is set as the internet time server in
            your Date/Time settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">
            Activate Windows
          </h2>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-400">
            Activation and Re-activation
          </h3>
          <p>
            After installation, activate the copy of windows within a grace
            period of 30 days. Windows can be activated or reactivated for a
            period of 180 days by the following procedure at any time during
            the grace period or at any time during the activated period. For
            this the machine must be connected to IIITDM LAN. Staff members who
            may have to travel outside campus should install and configure VPN
            access. Reactivation can be done any number of times. The product
            will notify the user if it needs to be activated to be used.
          </p>
          <p>
            Make sure that ntp.iiitdm.ac.in is set as the internet time server in
            your Date/Time settings and ACAD.WINDOWS.IIITDM.AC.IN is set as the
            DNS search string (suffix) from network properties.
          </p>
          <p>
            Type{' '}
            <code className="bg-gray-800 px-1 rounded">
              slmgr /skms ccwds.acad.windows.iiitdm.ac.in
            </code>{' '}
            from the administrator elevated DOS command prompt (run as
            Administrator).
          </p>
          <p>
            Open{' '}
            <a
              href="https://kmsproxy.iiitdm.ac.in/kms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://kmsproxy.iiitdm.ac.in/kms.html
            </a>{' '}
            and login using your IIITDM user id and password.
          </p>
          <p>
            Within the next 30 minutes activate or reactivate your Windows OS
            by issuing the command{' '}
            <code className="bg-gray-800 px-1 rounded">slmgr /ato</code> at the
            administrator elevated DOS command prompt.
          </p>
          <p>
            You can check the activation expiry date using the command{' '}
            <code className="bg-gray-800 px-1 rounded">slmgr /xpr</code> or
            check the license details using the command{' '}
            <code className="bg-gray-800 px-1 rounded">slmgr /dli</code> (or{' '}
            <code className="bg-gray-800 px-1 rounded">slmgr /dlv</code> for
            more details).
          </p>
          <p>Logout of your browser window.</p>
          <p>
            <strong>Warning:</strong> On expiry of either the grace period or
            activation period, the OS will go in to the Reduced Functionality
            Mode (RFM) which may eventually lead to an unusable state. Fresh
            installation would be required in this case.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-400">
            Grace period
          </h3>
          <p>
            You can renew the grace period for another 30 days by issuing the
            command{' '}
            <code className="bg-gray-800 px-1 rounded">slmgr /rearm</code> at
            the administrator elevated DOS command prompt before the expiry of
            the grace period or before the expiry of the activated period (see
            below). Note that the machine need not be connected to the IITD LAN
            for this operation and and this can be done at most three times.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-400">
            Activate Office
          </h2>
          <p>
            Make sure that ntp.iitd.ac.in is set as the internet time server in
            your Date/Time settings and ACAD.WINDOWS.IIITDM.AC.IN is set as the
            DNS search string (suffix) from network properties.
          </p>
          <p>
            Change to one of the following directories depending on the version
            of Office you installed using the following syntax in italics:
          </p>
          <p>
            <strong>Note:</strong> You can determine the version of Office
            running by launching Word and then navigating to File {">"} Help .
            The version will be listed on the right under “About Microsoft
            Word”.
          </p>
          <p>
            Office 32-bit in Windows 32-bit OS:
            <br />
            <code className="bg-gray-800 px-1 rounded">
              cd C:Program FilesMicrosoft OfficeOffice1X
            </code>
          </p>
          <p>
            Office 32-bit in Windows 64-bit OS:
            <br />
            <code className="bg-gray-800 px-1 rounded">
              cd C:Program Files (x86)Microsoft OfficeOffice1X
            </code>
          </p>
          <p>
            Office 64-bit in Windows 64-bit OS:
            <br />
            <code className="bg-gray-800 px-1 rounded">
              cd C:Program FilesMicrosoft OfficeOffice1X
            </code>
          </p>
          <p>
            Type{' '}
            <code className="bg-gray-800 px-1 rounded">
              cscript ospp.vbs /sethst:ccwds.acad.windows.iitd.ac.in
            </code>{' '}
            from the administrator elevated DOS command prompt.
          </p>
          <p>
            Open{' '}
            <a
              href="https://kmsproxy.iitd.ac.in/kms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://kmsproxy.iitd.ac.in/kms.html
            </a>{' '}
            and login using your IIITDM user id and password.
          </p>
          <p>
            Within the next 30 minutes activate or reactivate Office using the
            command{' '}
            <code className="bg-gray-800 px-1 rounded">
              cscript ospp.vbs /act
            </code>{' '}
            at the administrator elevated DOS command prompt.
          </p>
          <p>
            You can check the activation expiry date using the command{' '}
            <code className="bg-gray-800 px-1 rounded">
              cscript ospp.vbs /dstatus
            </code>
          </p>
          <p>Logout of your browser window.</p>

          
        </div>
      </div>
    </div>
  );
}
