import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "../fonts/Geist/static/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Geist/static/Geist-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Geist/static/Geist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Geist/static/Geist-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-geist",
});

const geistMono = localFont({
  src: [
    {
      path: "../fonts/Geist_Mono/static/GeistMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Geist_Mono/static/GeistMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Geist_Mono/static/GeistMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Geist_Mono/static/GeistMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-geist-mono",
});

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
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
