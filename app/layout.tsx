import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeSelector } from '@components';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default:
      'Yanal Almir | Frontend Architect — Monorepo & Platform Architecture',
    template: '%s | Yanal Almir',
  },
  description:
    'Frontend architect specialising in Turborepo monorepos. I design package topology, shared contracts and build graphs for organisations running multiple frontend surfaces. Netherlands-based, available for architecture and platform work.',
  authors: [{ name: 'Yanal Almir' }],
  creator: 'Yanal Almir',
  publisher: 'Yanal Almir',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yanalalmir.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yanalalmir.com',
    title:
      'Yanal Almir | Frontend Architect — Monorepo & Platform Architecture',
    description:
      'Frontend architect specialising in Turborepo monorepos. I design package topology, shared contracts and build graphs for organisations running multiple frontend surfaces. Netherlands-based, available for architecture and platform work.',
    siteName: 'Yanal Almir Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yanal Almir — Frontend Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Yanal Almir | Frontend Architect — Monorepo & Platform Architecture',
    description:
      'Frontend architect specialising in Turborepo monorepos. I design package topology, shared contracts and build graphs for organisations running multiple frontend surfaces. Netherlands-based, available for architecture and platform work.',
    images: ['/og-image.jpg'],
    creator: '@yanalalmir',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans classic`}>
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
