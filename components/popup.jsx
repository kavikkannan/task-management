import { useState } from 'react';

export default function LoginPopup({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <span onClick={onClose} className="absolute top-2 right-2 cursor-pointer text-gray-600">
          &times;
        </span>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
}
