import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const neuropolFont = localFont({ src: './font/neuropol.woff',
                                 variable: '--font-neuropol'})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3Dintersekt',
  description: '3D SCANNING | AS-BUILT SURVEYS | 3D MODELING',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${neuropolFont.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
