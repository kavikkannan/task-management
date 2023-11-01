"use client"
import React, { useState, useEffect } from "react";

const showndeleteM = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/user",{
          method: "GET",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        });
        if (response.ok) {
          const result = await response.json();
          setData(result); 
          setLoading(false); 
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
const deleteuser = async (a) =>{
    try {
        const response = await fetch(`http://localhost:8000/user/${a}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          const updatedData = data.filter((item) => item.id !== a);
          setData(updatedData);
          const fetchData = async () => {
            try {
              const response = await fetch("http://localhost:9000/api/user",{
                method: "GET",
              mode:"cors",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: 'include',
              });
                            if (response.ok) {
                const result = await response.json();
                setData(result); 
                setLoading(false); 
              } else {
                console.error("Failed to fetch data");
              }
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
        } else {
          console.error("Failed to delete user");
        }
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Registered Users</h2>
          <ul>
            {data.map((item) => (
              <li key={item.ID}>
                email: {item.name}, username: {item.author}
                <div><button
                  type="submit"
                  className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => deleteuser(item.ID)}                >
                   delete user
                </button></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default showndeleteM;
