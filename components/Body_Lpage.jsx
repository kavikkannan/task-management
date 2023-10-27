import React from 'react'
import Link from 'next/link';

const Body_Lpage = () => {
  return (
    <main>
    <section className="bg-indigo-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Welcome to TaskZ</h1>
        <p className="mt-4 text-xl text-gray-600">
          TaskZ is a powerful task management application that helps you stay organized and productive.
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
        <h2 className="text-3xl font-extrabold text-gray-900">Features</h2>
        <ul className="mt-6 list-disc list-inside text-gray-600">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    </section>
  </main>
  )
}

export default Body_Lpage