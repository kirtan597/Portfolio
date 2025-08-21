import './globals.css';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://kirtankumar-portfolio.vercel.app'),
  title: 'Panchal Kirtankumar - Software Developer & AI Enthusiast',
  description: 'Professional portfolio of Panchal Kirtankumar Prakashbhai - B.Tech CSE (AIML) student at Rai University, Ahmedabad. Specializing in full-stack web development, AI/ML, and modern software solutions.',
  keywords: 'Software Developer, AI, Machine Learning, Web Development, React, Node.js, Full Stack Developer, Computer Science, Ahmedabad',
  authors: [{ name: 'Panchal Kirtankumar Prakashbhai' }],
  creator: 'Panchal Kirtankumar Prakashbhai',
  openGraph: {
    title: 'Panchal Kirtankumar - Software Developer & AI Enthusiast',
    description: 'Professional portfolio showcasing software development projects, AI/ML expertise, and web development services.',
    url: 'https://kirtankumar-portfolio.vercel.app',
    siteName: 'Kirtankumar Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panchal Kirtankumar - Software Developer & AI Enthusiast',
    description: 'Professional portfolio showcasing software development projects and AI/ML expertise.',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}