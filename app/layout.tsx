import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import style from "./index.module.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DueDay",
  description: "Track what's due today",
  icons: ".",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={style.html} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
