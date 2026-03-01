import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Tenor_Sans } from 'next/font/google';

import { classnames } from '@/utils/classnames';
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';
import meta from '@/data/meta.json';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-montserrat',
});
const tenor = Tenor_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-tenor',
});

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL as string;

const { title, description, manifest, openGraph, icons } = meta;

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title,
  description,
  icons,
  manifest,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
  },
  openGraph: {
    ...openGraph,
    url: NEXT_PUBLIC_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="!scroll-smooth">
      <body
        className={classnames(
          montserrat.variable,
          tenor.variable,
          'flex h-full min-h-screen flex-col bg-mainBcg',
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer name={''} href={''} ariaL={''} />
      </body>
    </html>
  );
}
