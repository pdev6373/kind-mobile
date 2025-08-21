import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kind Mobile – The UK’s First Plastic-Free SIM Network for Businesses',
  description:
    'Join Kind Mobile, the UK’s first eco-friendly mobile network for businesses. Plastic-free SIMs, zero packaging, and real tracked impact—powered by Vodafone and Three. Mobile, kind to you and the planet.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-[#131F28]`}>
        {children}
      </body>
    </html>
  );
}
