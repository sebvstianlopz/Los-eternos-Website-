import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halfmoor | Ten pieces a season, made once",
  description:
    "Halfmoor is a small independent clothing label. One rail of ten pieces each season: heavyweight organic cotton, lambswool and oxford cloth, cut and sewn in a single workshop outside Porto.",
  openGraph: {
    title: "Halfmoor | Ten pieces a season, made once",
    description:
      "One rail of ten pieces each season, in heavyweight cotton, lambswool and oxford cloth. Handle the autumn rail.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
