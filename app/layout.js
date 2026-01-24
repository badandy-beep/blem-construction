/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Michael Blem Construction | 40+ Years Building Southwest Florida',
  description: 'Third-generation master builder serving Southwest Florida for 40+ years. From custom homes to $13M commercial projects. Zero claims record. Direct owner access. AI-powered efficiency for 20-30% cost savings. Licensed CGC 1508400, CBC 047796.',
  keywords: 'construction, contractor, Sarasota, Southwest Florida, custom homes, commercial construction, remodeling, storm restoration, hurricane resistant, Florida builder',
  authors: [{ name: 'Michael Blem Construction' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    title: 'Michael Blem Construction | Building Legacies Since 1987',
    description: 'Third-generation master builder. 40+ years of excellence in Southwest Florida. Half the cost of mega-builders with double the quality.',
    url: 'https://michaelblem.com',
    siteName: 'Michael Blem Construction',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-primary.svg" />
        <meta name="theme-color" content="#1C2B39" />
        <meta name="format-detection" content="telephone=no" />
        {/* Brand Package Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Montserrat:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
        <Header />
        <main style={{ overflowX: 'hidden' }}>{children}</main>
        <Footer />
        {/* NDG Attribution */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('© 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY');`,
          }}
        />
      </body>
    </html>
  );
}
