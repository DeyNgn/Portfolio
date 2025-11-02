'use client';
import './globals.css';
import {Providers} from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Dey Engineering</title>
        <meta name="description" content="Developing secure digital foundations." />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
