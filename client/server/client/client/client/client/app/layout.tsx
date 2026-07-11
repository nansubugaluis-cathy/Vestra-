import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VESTRA",
  description: "Professional Fabric Care. Engineered for Excellence."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
