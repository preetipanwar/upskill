import React from 'react';

export default function Button({ name, bgcolor }) {
  return (
    <>
      <button
        className="p-4 h-14 text-lg rounded-md"
        style={{ backgroundColor: bgcolor }}
      >
        {name}
      </button>
    </>
  );
}
