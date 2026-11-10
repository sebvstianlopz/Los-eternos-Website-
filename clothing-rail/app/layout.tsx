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
  title: "Halfmoor | Four pieces a season, made once",
  description:
    "Halfmoor is a small independent clothing label. One rail of four pieces each season: a poplin shirt, a jersey long-sleeve, a heavyweight tee and a fleece sweatshirt, cut and sewn in a single workshop outside Porto.",
  openGraph: {
    title: "Halfmoor | Four pieces a season, made once",
    description:
      "One rail of four pieces each season, in cotton poplin, jersey and loopback fleece. See the autumn rail.",
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
