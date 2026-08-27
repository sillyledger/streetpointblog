import type { Metadata } from "next";
import { Big_Shoulders_Display, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streetpoint",
  description: "Field notes, filed weekly. A Ryoka Group publication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
