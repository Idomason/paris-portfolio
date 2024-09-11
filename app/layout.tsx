import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import ResponsiveNav from "@/components/home/navbar/responsiveNav";
import Footer from "@/components/home/footer/footer";

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paris | Portfolio",
  description: "A portfolio app built with Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
