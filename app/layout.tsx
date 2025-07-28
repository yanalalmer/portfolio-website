import type { Metadata } from 'next';
import { Lexend_Deca, Frank_Ruhl_Libre } from 'next/font/google';
import './globals.css';
import { Header, Footer, SmoothScroll } from '@components';
import Script from 'next/script';

const lexend = Lexend_Deca({ subsets: ['latin'], variable: '--font-lexend' });
const frank = Frank_Ruhl_Libre({
  subsets: ['latin'],
  variable: '--font-frank',
});

export const metadata: Metadata = {
  title: 'Yanal Almir | Freelance Web Developer',
  description: 'Freelance Web Developer',
  icons: {
    icon: '/favicon.ico',
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
      className={`${lexend.variable} font-sans ${frank.variable} font-serif`}
    >
      <body>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
