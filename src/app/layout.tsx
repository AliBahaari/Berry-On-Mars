import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Layout from '@/components/Layout'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'fallback',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Berry On Mars',
  description: 'Berry On Mars',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      />

      <body className={`${inter.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
