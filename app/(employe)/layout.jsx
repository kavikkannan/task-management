
import Header from '@/components/headerE';

export const metadata = {
  title: 'task',
  description: 'task management systenm',
}

export default function rootLayout({ children }) {
  return (
    <section lang="en">
         
        <div className=' bg-green-200 '>
        <Header/>
        <main 
        className={"app"}>{children}</main>
        </div>
        
    </section>
  )
}