import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'Eva Dent — Стоматология в Казани',
  description: 'Современная стоматологическая клиника в Казани. Лечение зубов, имплантация, протезирование, брекеты, удаление зубов мудрости. Качественное лечение по доступным ценам.',
  keywords: 'стоматология казань, лечение зубов, имплантация зубов, брекеты, протезирование, удаление зубов',
  icons: {
    icon: [
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.png',
  },
    generator: 'kauroah'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}