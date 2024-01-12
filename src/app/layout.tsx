import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Pradhumn Gautam | Portfolio",
  authors: [
    { name: "Pradhumn Gautam", url: "https://github.com/pradhumngautam" },
    { name: "Pradhumn", url: "https://github.com/pradhumngautam" },
  ],
  description: "Pradhumn's personal portfolio website",
  openGraph: {
    title: "Pradhumn Gautam | Portfolio",
    description: "Eric Huang's personal portfolio website",
    images: [
      {
        url: "/dp",
        alt: "Pradhumn Gautam | Portfolio",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="container lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
