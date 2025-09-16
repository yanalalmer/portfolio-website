import type { Metadata } from "next";
import { Lexend_Deca, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import { ThemeSelector } from "@components";

const lexend = Lexend_Deca({ subsets: ["latin"], variable: "--font-lexend" });
const frank = Frank_Ruhl_Libre({
  subsets: ["latin"],
  variable: "--font-frank",
});

export const metadata: Metadata = {
  title: "Yanal Almir | Freelance Web Developer",
  description: "Freelance Web Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} font-sans ${frank.variable} font-serif classic`}
    >
      <body className="antialiased bg-bg text-text">
        <ThemeSelector />
        {children}
      </body>
    </html>
  );
}
