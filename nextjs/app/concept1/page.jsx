import React from 'react';
import { vegetables } from './data';

export default function page() {
  return (
    <div>
      {vegetables.map(function (item) {
        return (
          <div className="p-3 m-3 bg-gray-500 w-80">
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <p>Instock: {item.stocked}</p>
          </div>
        );
      })}
    </div>
  );
}
