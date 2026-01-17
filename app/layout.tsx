import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'State Exam Review Program 2026 - Grades 3-8 ELA & Math',
  description:
    'Comprehensive State Exam Review for Grades 3-8. Expert ELA and Math instruction starting March 8, 2026. Small group classes, practice tests, and proven results.',
  keywords:
    'state exam review, grade 3-8, ELA review, Math review, March 2026, test prep, exam preparation',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
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
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${poppins.variable} ${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
