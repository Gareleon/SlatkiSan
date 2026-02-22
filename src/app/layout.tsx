import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slatki san",
  description: "Ostvarite slatki san kroz naše slatkiše",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
