import React from 'react'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import 'style/globals.css'

const montserrat = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'NextJS Template',
  description: 'by Fahad Hussain'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
