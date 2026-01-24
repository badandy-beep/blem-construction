/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Michael Blem Construction | 40+ Years Building Southwest Florida',
  description: 'Third-generation master builder serving Southwest Florida for 40+ years. Zero claims record. Direct owner access. AI-powered efficiency. Licensed CGC 1508400, CBC 047796.',
  keywords: 'construction, contractor, Sarasota, Southwest Florida, custom homes, commercial construction',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1C2B39" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ overflowX: 'hidden' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
