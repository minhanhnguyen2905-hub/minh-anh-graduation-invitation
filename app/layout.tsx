import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { AudioProvider } from '@/components/audio-provider'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A Special Invitation — Nguyễn Ngọc Minh Anh',
  description:
    'You are warmly invited to the graduation ceremony of Nguyễn Ngọc Minh Anh, Bachelor of Psychology, Saigon University.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f1e7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <AudioProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </AudioProvider>
      </body>
    </html>
  )
}
