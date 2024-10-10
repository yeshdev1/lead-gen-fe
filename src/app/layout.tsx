import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Recruitment",
  description: "Reputed engineering talent sourcers",
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
