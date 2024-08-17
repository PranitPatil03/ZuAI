import "./globals.css";
import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";

export const metadata: Metadata = {
  title: "ZuAi",
  description: "24/7 AI Study Buddy",
};

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
