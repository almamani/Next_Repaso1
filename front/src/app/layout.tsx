import NavBar from "@/components/NavBar/index";
import type { Metadata } from "next";
import { Agdasima } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/index";

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
    <html lang="en" className={agdasima.className}>
      <body className="container">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
