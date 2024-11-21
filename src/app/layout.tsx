import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baylasan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.className} h-full w-full antialiased bg-gray-200 py-4 md:py-8`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
