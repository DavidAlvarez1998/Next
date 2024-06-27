import type { Metadata } from "next";
import "./globals.css";
import { titleFonts } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Shop Teslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titleFonts.className}>{children}</body>
    </html>
  );
}
