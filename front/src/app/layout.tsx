import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Agdasima } from "next/font/google";
import "./globals.css";

const agdasima = Agdasima({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CompuShop",
  description: "Sale of technology products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={agdasima.className}>{children}</body>
    </html>
  );
}
