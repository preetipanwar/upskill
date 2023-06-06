import React from 'react';
import { vegetables } from './data';

export default function page() {
  return (
    <div>
      {vegetables.map(function (item) {
        const color = item.stocked ? 'green' : 'pink';
        return (
          <div
            style={{ backgroundColor: color }}
            className="p-3 m-3 bg-gray-500 w-60 rounded-md mx-auto"
          >
            <div className="flex justify-between space-y-2">
              <p className="text-black">{item.name}</p>
              <p>{item.stocked ? '✔' : 'x'}</p>
            </div>
            <div className="flex space-x-1">
              <p className="py-1 px-2 bg-orange-800 w-fit rounded">
                {item.category}
              </p>
              <p className="py-1 px-2 bg-black w-fit rounded"> {item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// condition ? 'true statement' : 'false statement';
