import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Divyesh Annavarapu — Consumer Insights & Growth Analytics',
  description: "I find the cohort, the churn signal, and the price cliff that aggregate dashboards smooth away — then turn it into a decision you can act on. BU MSBA '26.",
  openGraph: {
    title: 'Divyesh Annavarapu — Consumer Insights & Growth Analytics',
    description: 'I find the cohort, the churn signal, and the price cliff that aggregate dashboards smooth away.',
    type: 'website',
    url: 'https://divyesh.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bg1 focus:text-accent focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
