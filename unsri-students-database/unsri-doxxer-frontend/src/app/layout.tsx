import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/footer'
import Header from './components/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsri Doxxer 5000",
  description: "Welcome to the best doxxer in all of Palembang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
