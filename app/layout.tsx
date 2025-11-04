import type { Metadata } from "next";
import {
  Anton,
  Geist,
  Geist_Mono,
  Inter,
  Pacifico,
  Poppins,
} from "next/font/google";
import "./globals.css";
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400", // Pacifico only has one weight
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Pacifico only has one weight
});
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400", // Pacifico only has one weight
});

// Poppins Regular + Italic
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Regular weight
  style: ["normal", "italic"], // Include both styles
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEWNA — Custom Fashion, Crafted for You",
  description:
    "SEWNA connects people with independent designers to create custom outfits that express individuality and craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${pacifico.variable} 
          ${poppins.variable} 
          ${inter.variable} 
          ${anton.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
