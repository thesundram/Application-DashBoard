import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '../components/footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#081533',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://uttamgalvasolutions.vercel.app'),
  title: 'Uttam Galva Innovative Solutions Pvt. Ltd. | Solutions Dashboard | Manufacturing Operations Portal',
  description: 'Centralized launcher for all manufacturing and operations applications - Uttam Galva Innovative Solutions Pvt. Ltd.',
  generator: 'Uttam Galva Innovative Solutions Pvt. Ltd.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
        <div className="flex-1 w-full">
          {children}
        </div>
        {/* Footer */}
        <div className="container mx-auto px-4 pb-4 mt-auto">
          <Footer />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
