import type { Metadata } from "next";
import { Lexend_Mega, Space_Mono } from "next/font/google";
import "./globals.css";

const lexendMega = Lexend_Mega({
  variable: "--font-display",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Riski Dafa Setyawan | Frontend Specialist & Fullstack Developer",
  description:
    "Portfolio of Riski Dafa Setyawan, a Frontend Specialist with strong Backend (NestJS, Laravel) and Cloud (GCP) experience.",
  keywords: [
    "Frontend Developer",
    "NestJS",
    "Laravel",
    "React",
    "Next.js",
    "GCP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendMega.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
