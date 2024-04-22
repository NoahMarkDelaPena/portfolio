import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noah Mark",
  description: "This is my postfolio as of 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio-logo.svg" sizes="any" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
