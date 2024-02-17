import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Kavoon } from "next/font/google";
import { Khand } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const kavoon = Kavoon({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-kavoon'
});
const khand = Khand({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weaveswap",
  description: "Weaveswap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kavoon.variable} ${khand.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
