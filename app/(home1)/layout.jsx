import { Inter } from 'next/font/google'

import Header from '@/components/header';

export const metadata = {
  title: 'task',
  description: 'task management systenm',
}

export default function rootLayout({ children }) {
  return (
    <section lang="en">
         
        <div className="relative bg-blue-300 h-screen">
        <Header/>
        <main className={"app"}>{children}</main>
        </div>
        
    </section>
  )
}
