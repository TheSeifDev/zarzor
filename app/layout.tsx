import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Google font: Montserrat
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: "--font-montserrat",
});


// Local font: Brown Sugar
const brownSugar = localFont({
  src: "./fonts/brown-sugar.ttf",
  variable: "--font-brown-sugar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Eid - Portfolio",
  description: "Montserrat as default, Brown Sugar optional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${brownSugar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
