import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import config from 'data/config';
import 'components/ui/globals.css';
import { cn } from 'lib/utils';

const { url, defaultDescription, defaultTitle } = config;

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(url),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('bg-background min-h-screen font-sans antialiased scroll-smooth', roboto.variable)}>
      {children}
    </body>
  </html>
);

export default RootLayout;
