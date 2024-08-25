// app/page.tsx

import React from 'react';
import { headers } from 'next/headers';
import Image from 'next/image';

export const runtime = 'edge';

const MaintenancePage: React.FC = () => {
  // Check if the request is in maintenance mode by looking for the custom header
  const maintenanceMode = headers().get('x-maintenance-mode') === 'true';

  if (maintenanceMode) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={128}
            height={128}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">We&apos;ll be back soon!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our website is currently undergoing scheduled maintenance.
            <br />
            Thank you for your patience.
          </p>
          <div>
            <p className="text-sm text-gray-500">Estimated time remaining: 2 hours</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Regular page content goes here */}
      <h1>Welcome to the website!</h1>
    </div>
  );
};

export default MaintenancePage;