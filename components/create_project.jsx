'use client'
import { Fragment,useEffect,useState } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function create_project() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');

  const openForm = () => {
    setIsOpen(true);
  };
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('')
  const closeForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', projectName, employeeName, taskName, deadline);
    closeForm();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user/");
        if (response.ok) {
          const result = await response.json();
          setData(result); 
          /* setLoading(false); */ 
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-start mb-4">
      <p className="text-black font-bold mb-2">To fill project details,click open form</p>
      <button
        className="bg-blue-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded w-30 h-10"
        onClick={openForm}
      >
        Open Form
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
          <div className="bg-teal-200 p-4 rounded-md shadow-md">
            <h2 className="text-black text-xl font-semibold mb-4">Enter Project Details</h2>
            <form onSubmit={handleSubmit} class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
              
              
            
            
            <div className="mb-4">
                <input
                  type="text"
                  placeholder="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full p-2 border rounded-md text-black"
                  required
                />
              </div>
            
      
              <div className="mb-4">
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full p-3 border rounded-md text-black"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </div>
  )
}