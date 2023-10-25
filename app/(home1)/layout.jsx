
import Header from '@/components/header';

export const metadata = {
  title: 'task',
  description: 'task management systenm',
}

export default function rootLayout({ children }) {
  return (
    <section lang="en">
         
        <div className='bg-gray-500'>
        <Header/>
        <main 
        className={"app"}>{children}</main>
        </div>
        
    </section>
  )
}
