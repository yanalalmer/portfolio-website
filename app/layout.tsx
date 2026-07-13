import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeSelector } from "@components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Yanal Almir | AI-Powered Frontend Developer",
    template: "%s | Yanal Almir",
  },
  description:
    "Frontend developer specializing in AI-powered web development. Expert in React, TypeScript, Next.js, and modern web technologies. Building pixel-perfect, accessible user interfaces for high-traffic platforms serving millions of users.",
  keywords: [
    "frontend developer",
    "freelance developer",
    "React developer",
    "TypeScript developer",
    "Next.js developer",
    "AI-powered development",
    "web development",
    "user interface design",
    "accessible web design",
    "high-traffic applications",
    "e-commerce development",
    "corporate applications",
    "web performance",
    "modern web technologies",
  ],
  authors: [{ name: "Yanal Almir" }],
  creator: "Yanal Almir",
  publisher: "Yanal Almir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yanalalmir.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yanalalmir.com",
    title: "Yanal Almir | AI-Powered Frontend Developer & Freelance Engineer",
    description:
      "Freelance frontend developer specializing in AI-powered web development. Expert in React, TypeScript, Next.js, and modern web technologies. Building pixel-perfect, accessible user interfaces for high-traffic platforms serving millions of users.",
    siteName: "Yanal Almir Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yanal Almir - AI-Powered Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanal Almir | AI-Powered Frontend Developer & Freelance Engineer",
    description:
      "Freelance frontend developer specializing in AI-powered web development. Expert in React, TypeScript, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@yanalalmir",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} font-sans classic`}
    >
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      </head>
      <body className="antialiased bg-bg text-text">
        <ThemeSelector />
        {children}
      </body>
    </html>
  );
}
