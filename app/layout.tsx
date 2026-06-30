import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

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
  keywords: ['consumer insights', 'growth analytics', 'causal inference', 'customer segmentation', 'churn modeling', 'behavioral economics', 'marketing mix modeling', 'BU MSBA', 'GEO', 'AEO', 'LLM visibility'],
  openGraph: {
    title: 'Divyesh Annavarapu. Consumer Insights and Growth Analytics.',
    description: 'I find the cohort, the churn signal, and the price cliff aggregate dashboards hide.',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fraunces.variable + ' ' + inter.variable + ' ' + jetbrainsMono.variable}>
      <body>
        <a href="#main" className="sr-only">Skip to content</a>
        <AnimatedBackground />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
