import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='w-full flex flex-col' id='body'>
        <main className='flex'>
          <div className='w-screen'>{children}</div>
        </main>
      </body>
    </html>
  )
}
