import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export const metadata: Metadata = {
  title: 'Sakhi Jewels | Luxury Fashion Jewellery',
  description: 'Discover exquisite luxury fashion jewellery, bridal sets, earrings, necklaces and statement pieces. Premium craftsmanship meets contemporary design at Sakhi Jewels.',
  keywords: ['luxury jewellery', 'fashion jewellery', 'bridal sets', 'earrings', 'necklaces', 'bangles', 'designer jewellery', 'imitation jewellery', 'sakhi jewels'],
  authors: [{ name: 'Sakhi Jewels' }],
  creator: 'Sakhi Jewels',
  publisher: 'Sakhi Jewels',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sakhijewels.com',
    title: 'Sakhi Jewels | Luxury Fashion Jewellery',
    description: 'Premium craftsmanship meets contemporary design. Discover our exquisite collection of luxury fashion jewellery.',
    siteName: 'Sakhi Jewels',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sakhi Jewels - Luxury Fashion Jewellery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakhi Jewels | Luxury Fashion Jewellery',
    description: 'Premium craftsmanship meets contemporary design.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sakhijewels.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`${poppins.className} antialiased bg-gray-950`}>
        {children}
      </body>
    </html>
  )
}
