import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Divyesh Annavarapu. Consumer Insights and Growth Analytics. BU MSBA 26',
  description: 'I help teams find the cohort, the churn signal, and the price cliff that dashboards average away. Then I turn it into a decision you can act on. BU MSBA 26. British Airways, Starbucks, Newdia.',
  keywords: ['consumer insights', 'growth analytics', 'causal inference', 'customer segmentation', 'churn modeling', 'behavioral economics', 'marketing mix modeling', 'BU MSBA'],
  openGraph: {
    title: 'Divyesh Annavarapu. Consumer Insights and Growth Analytics.',
    description: 'I find the cohort, the churn signal, and the price cliff aggregate dashboards hide. British Airways, Starbucks, Newdia.',
    type: 'website',
    url: 'https://divyesh-portfolio-v3.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyesh Annavarapu. Consumer Insights and Growth Analytics.',
    description: 'I find the cohort, the churn signal, and the price cliff aggregate dashboards hide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fraunces.variable + ' ' + inter.variable + ' ' + jetbrainsMono.variable}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-green-400 focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
