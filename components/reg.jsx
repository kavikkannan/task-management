"use client"
import { Router, useRouter } from "next/navigation"; // Fix the import statement
import Link from "next/link";
import React, { useState } from "react"; // Correct the import statement
import { useEffect } from "react"; // Import useEffect for side effects
import Header_LPage from '@/components/loading';

export default function login() {
  const [loading, setLoading] = useState(false);

  const [Name, setEmail] = useState('');
  const [Publication, setPassword] = useState('');
  const [Author, setUsername] = useState('');
  const router = useRouter();
  const signup = async () => {
     try {
      setLoading(true);
      // Set loading to true when the request is initiated
      const response = await fetch("http://localhost:8000/book/", {
        method: "POST",
        mode:"cors",
        headers: {
          'Content-Type': 'pkglication/json'
        },
        body: JSON.stringify({
          Name,
          Author,
          Publication
        })
      });
      
      if (response.ok) {
        console.log("success");
        
        router.push("/signin");
      } else {
        console.log("not success");      }
    } catch (error) {
        console.log(error);    
      }finally {
        setLoading(false); // Set loading to false when the request is completed
        
      }
      
  }
    return (
      <>
      {loading ? (
          <div className="relative">
          {loading && <Header_LPage />} {/* Display loading animation when loading is true */}
        </div>
         // Display loading message or spinner
      ) : (
        <div className="absolute  w-full bg-purple-300  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" absolute top-10 right-13 sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/"><img
              className=" text-black mx-auto h-10 w-auto"
              src=""
              alt="Your Company"
            />
            </Link>
          </div>
          <div className=" relative bottom-20 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register your account
            </h2>
          </div>
  
          <div className="relative bottom-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
    
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={signup}
                >
                   sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have a account?{' '}
              <a href="login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign In
              </a>
            </p>
          </div>
        </div>
        
      )}
        </>
    );
  }
  