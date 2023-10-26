"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
export default function page (){
  const [user, setUser] = useState('');
  const router=useRouter();
  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        // Make a request to your Go API endpoint
        const response = await fetch(`http://localhost:9000/api/user`); // Replace with your actual API endpoint
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser('manager');
          console.error('Failed to fetch user data');
          
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  console.log(user);
  if(user=='manager'){
    router.push('/home_manager')
  }
  return (
    <div>page</div>
  )
}
