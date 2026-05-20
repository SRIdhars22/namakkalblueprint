import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Namakkal Blueprint | Print, Building Approval, 2D Plans & E-Seva Services',
  description: 'Namakkal Blueprint - Your trusted partner for building approval, land layout, survey work, 2D architectural plans, large-format printing, xerox services, money transfer, and E-Seva government document services in Namakkal, Tamil Nadu. Fast 8KM delivery available.',
  keywords: [
    'Namakkal Blueprint',
    'building approval Namakkal',
    'DTCP plan approval',
    'panchayat building permit',
    'land layout planning',
    'survey work Namakkal',
    '2D building plans',
    'architectural plans Namakkal',
    'large format printing',
    'A0 A1 A2 printing',
    'xerox services Namakkal',
    'E-Seva center',
    'government document services',
    'Aadhaar PAN services',
    'certificate services Tamil Nadu',
    'money transfer Namakkal',
    'print shop near me',
    'blueprint printing',
    'CAD plan printing',
    'construction estimate',
    'bank estimate preparation',
    'Namakkal Tamil Nadu',
  ],
  authors: [{ name: 'Namakkal Blueprint' }],
  creator: 'Namakkal Blueprint',
  publisher: 'Namakkal Blueprint',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://namakkalblueprint.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://namakkalblueprint.com',
    siteName: 'Namakkal Blueprint',
    title: 'Namakkal Blueprint | Print, Building Approval, 2D Plans & E-Seva Services',
    description: 'Your one-stop shop for building approvals, land layout, survey work, 2D plans, printing, and E-Seva services in Namakkal. 8KM delivery available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Namakkal Blueprint - Professional Print & Document Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Namakkal Blueprint | Print, Building Approval & E-Seva Services',
    description: 'Professional building approvals, 2D plans, printing, and E-Seva services in Namakkal. 8KM delivery available.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A1628' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Namakkal Blueprint',
              image: 'https://namakkalblueprint.com/logo.jpeg',
              '@id': 'https://namakkalblueprint.com',
              url: 'https://namakkalblueprint.com',
              telephone: '+919500698927',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'No 707 A, Murugan Kovil Bus Stop, Namakkal - Salem Road',
                addressLocality: 'Namakkal',
                addressRegion: 'Tamil Nadu',
                postalCode: '637001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 11.2189,
                longitude: 78.1674,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '10:00',
                  closes: '16:00',
                },
              ],
              sameAs: [
                'https://www.instagram.com/namakkal__blueprint',
                'https://wa.me/919500698927',
              ],
              priceRange: '$$',
              servesCuisine: 'Document Services',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 11.2189,
                  longitude: 78.1674,
                },
                geoRadius: '8000',
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
