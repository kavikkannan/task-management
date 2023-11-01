import React from 'react'
import Link from 'next/link';

const Body_Lpage = () => {
  return (
    <main>
    <section className="bg-indigo-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Welcome to TaskZ</h1>
        <p className="mt-4 text-xl text-gray-600">
        TaskZ is a powerful task management app designed to bring order, simplicity, and efficiency to your work and personal life. Whether you're a busy professional, a dedicated student, or a team leader, TaskZen empowers you to take control of your tasks, projects, and deadlines with ease.
        </p>
        <div className="mt-6">
          <Link href="/signup" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
            Get started
          </Link>
        </div>
      </div>
    </section>
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
        <ul className="mt-6 list-disc list-inside text-gray-600">
          <li>Quickly add and organize your tasks, ensuring you have a clear and organized to-do list at your fingertips.</li>
          <li>Collaborate with your colleagues or team members effortlessly. Share tasks, leave comments, and monitor project progress in real time.</li>
          <li>Set task priorities to focus on what truly matters. Meet deadlines, accomplish goals, and reduce stress.</li>
        </ul>
      </div>
   
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Why TaskZ?</h2>
        <ul className="mt-6 list-disc list-inside text-gray-600">
          <li>TaskZ adapts as your needs grow, making it a great fit for individuals, startups, and large organizations.</li>
          <li>Access TaskZ from any device, anywhere. Your tasks are always within reach.</li>
          
        </ul>
      </div>
    </section>
  </main>
  )
}

export default Body_Lpage