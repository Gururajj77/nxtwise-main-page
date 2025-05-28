import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'nxtwise',
  description: 'nxtwise is a custom software development company specializing in AI solutions for businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
