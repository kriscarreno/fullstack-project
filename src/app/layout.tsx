import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import SideBarComponent from '@/components/app/side-bar/side-bar-component'
import { chatList } from '@/_mocks/chat-list'

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
        <main className='flex flex-1  w-full '>
          <SideBarComponent chatList={chatList} />
          <div className='max-w-screen-2xl w-full'>{children}</div>
        </main>
      </body>
    </html>
  )
}
