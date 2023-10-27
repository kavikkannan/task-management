"use client"
import {useRouter} from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"; 
import Loading from '@/components/loading';
import { Result } from "postcss";
export default function loginM() {
  const [loading, setLoading] = useState(false);
  const router=useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
    



  const Signin = async () => {
    try {

      setLoading(true);
  
      const response = await fetch(`http://localhost:9000/api/login`, {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        })
      }).then((response) => response.json())
      
     
      
        if(response.message=='success'){
          const data = await fetch(`http://localhost:8000/employe/${email}`);
          const result = await data.json();
          sessionStorage.setItem('user.email',email);
          
          if(result.position=='manager'){
            router.push('/home_manager')
          }
          else{
            if(result.position=='employe')
            router.push('/home_employe')
          }
        }
        else{
          alert(response.message)
        }
      
         
    
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    
  };   


    return (
      <>
      {loading ? (
          <div className="relative">
          {loading && <Loading />} 
        </div>
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
              Sign in  account
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
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              
            </form>
            <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={Signin}
                >
                   sign in
                </button>
              </div>
            
            <p className="mt-10 text-center text-sm text-gray-500">
              wanna create acc?{' '}
              <a href="signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
        
        )}
        </>
    );
      }
