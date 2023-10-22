import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'task',
  description: 'task management systenm',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-black' lang="en">
      <body>
        <main className={"app"}>{children}</main>
        </body>
      
    </html>
  )
}
