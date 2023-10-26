"use client"

import React, {Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function bodyM() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('')
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
    <form>
      <table className="shadow-lg relative top-20 flex justify-center bg-black">
      <tbody>
        <tr>
          <th className="bg-green-700 border text-left px-8 py-4">Company</th>
          <th className="bg-green-700 border text-left px-8 py-4">Contact</th>
          <th className="bg-green-700 border text-left px-8 py-4">Country</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border px-8 py-4">{item.company}</td>
            <td className="border px-8 py-4">{item.contact}</td>
            <td className="border px-8 py-4">{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
      <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
  
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((person) => (
                  <Listbox.Option
                    key={person.ID}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                      
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </form>
    
  )
}
