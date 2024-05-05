import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AppLayout from '@/AppLayout';

const satoshiRegular = localFont({
  src: "../public/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi-regular",
});

const monumentExtendedRegular = localFont({
  src: "../public/fonts/MonumentExtended-Regular.woff2",
  variable: "--font-monument-regular",
});

const satoshiMedium = localFont({
  src: "../public/fonts/Satoshi-Medium.woff2",
  variable: "--font-satoshi-medium",
});

const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Bold.woff2",
  variable: "--font-satoshi-bold",
});

export const metadata: Metadata = {
  title: "Creaon - Design at Niftables",
  description: "Create design for front-end application at Niftables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshiRegular.variable} ${monumentExtendedRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable} font-sans`}
      >
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
