// app/layout.tsx

import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Maintenance',
  description: 'Our website is currently under maintenance.',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
