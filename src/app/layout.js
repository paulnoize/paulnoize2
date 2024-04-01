import Head from 'next/head';

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skeleton | CL",
  description: "Aplicaciones Chile",
  keywords: ['Aplicaciones', 'Diseño', 'Web', 'Lanco', 'Chile', 'Los Rios', 'Skeleton', 'Paul Pineda', 'skeleton.cl'],

};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">

      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

