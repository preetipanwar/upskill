'use client';
import React, { useState } from 'react';

// use state tutorial

export default function TextUtility() {
  //   function useMe(string) {
  //     function setString() {
  //      string = string + 1;
  //     }
  //     return [string, setString];
  //   }

  //   const [string, setString] = useMe('hello world');

  const [textArea, setTextArea] = useState('');

  return (
    <div className="p-3 m-3 bg-gray-500 w-60 rounded-md mx-auto">
      <textarea
        onChange={(e) => setTextArea(e.target.value)}
        className="p-4 h-60 bg-pink-200 w-full rounded text-pink-800"
        value={textArea}
      ></textarea>
      <p className=" p-4 my-4 w-full bg-gray-700 rounded">{textArea}</p>
      <div className="flex space-x-2">
        <h1>{textArea.trim().length}</h1>
        <button
          className="bg-purple-500 px-2 py-1 rounded-lg text-sm"
          onClick={() => setTextArea('')}
        >
          clear
        </button>
        <button
          className="bg-green-600 px-2 py-1 rounded-lg text-sm"
          onClick={() => navigator.clipboard.writeText(textArea)}
        >
          copy
        </button>
      </div>
    </div>
  );
}
