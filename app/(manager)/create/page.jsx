import React from 'react'
import CreateT from '@/components/create_task'
import CreateP from '@/components/create_project'

const page = () => {
  return (
    <div className="flex">
    <div className="w-1/2 h-screen bg-gray-300">
      <CreateP/>
    
    </div>
    <div className="w-1/2 h-screen bg-gray-300">
      
      <CreateT/>
    </div>
    
  </div>
   
    
  )
}

export default page