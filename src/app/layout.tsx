import type { Metadata } from "next";
import "./globals.css";
import head from '../assets/head.jpeg';

export const metadata: Metadata = {
  title: "Signal Recruitment",
  description: "Reputed engineering talent sourcers",
  icons: {
    icon: head.src,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
