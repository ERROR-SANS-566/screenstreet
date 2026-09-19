import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Screenstreet - Discover Astana",
  description: "A multilingual AI guide that helps visitors discover Astana through QR codes, local stories and smart recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
