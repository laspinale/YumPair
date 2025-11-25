import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-display" });

export const metadata: Metadata = {
  title: "YumPair | Discover Mouthwatering Pairings",
  description: "Pair foods, share ideas, and rate the community's favorite flavor combos."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
