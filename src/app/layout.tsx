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
  metadataBase: new URL("https://straysheep.vercel.app"),
  title: {
    default: "Riski Dafa Setyawan | Frontend Specialist & Fullstack Developer",
    template: "%s | Riski Dafa Setyawan",
  },
  description:
    "Portfolio of Riski Dafa Setyawan, Frontend Developer experienced in building web/mobile apps using React, Next.js, React Native & backend with Laravel/NestJS.",
  keywords: [
    "Frontend Developer",
    "Fullstack Developer",
    "NestJS",
    "Laravel",
    "React",
    "Next.js",
    "GCP",
    "Riski Dafa Setyawan",
    "StraySheep",
  ],
  authors: [{ name: "Riski Dafa Setyawan", url: "https://straysheep.vercel.app" }],
  creator: "Riski Dafa Setyawan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://straysheep.vercel.app/",
    title: "Riski Dafa Setyawan | Frontend Specialist & Fullstack Developer",
    description:
      "Portfolio of Riski Dafa Setyawan, Frontend Developer experienced in building web/mobile apps using React, Next.js, React Native & backend with Laravel/NestJS.",
    siteName: "Riski Dafa Setyawan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riski Dafa Setyawan | Frontend Specialist & Fullstack Developer",
    description:
      "Portfolio of Riski Dafa Setyawan, Frontend Developer experienced in building web/mobile apps using React, Next.js, React Native & backend with Laravel/NestJS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "isi_google_site_verification_di_sini", // Uncomment & ganti dengan kode verifikasi Google Search Console Anda
  },
  alternates: {
    canonical: "https://straysheep.vercel.app/",
  },
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
