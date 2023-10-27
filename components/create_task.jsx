'use client'
import React, { useState } from 'react';
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/solid";

function YourComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const data = [
    { ID: 1, name: "Option 1" },
    { ID: 2, name: "Option 2" },
    { ID: 3, name: "Option 3" },
  ];

  const openForm = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsOpen(false); // Close the form after submission
  };

  return (
    <div>
      
      {isOpen && (
        <div className=" top-0 left-0 w-full h-full flex  justify-center">
          <div className="bg-green-200 p-4 rounded-md shadow-md">
            <h2 className="text-black text-xl font-semibold mb-4">Enter Project Details</h2>
            <form onSubmit={handleSubmit}>
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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={openForm}
      >
        Open Form
      </button>
    </div>
  );
}

export default YourComponent;
