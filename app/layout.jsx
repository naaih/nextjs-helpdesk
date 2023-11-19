import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'


import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Helpdesk | Dashboard',
  description: 'This is a helpdesk application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
