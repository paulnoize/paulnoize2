import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skeleton | CL",
  description: "Aplicaciones Chile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
