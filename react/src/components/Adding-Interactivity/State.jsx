// state - a components memory

import { useState } from 'react';
import { sculptureList } from '../../data';

export default function State() {
  const [index, setIndex] = useState(0);
  const [showHide, setShowHide] = useState(true);
  let sculpture = sculptureList[index];

  function increment() {
    if (index < sculptureList.length - 1) setIndex(index + 1);
  }
  const toggleD = () => setShowHide(!showHide);

  return (
    <div className="card">
      <button onClick={increment}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <p>
        {index + 1} of {sculptureList.length}
      </p>
      {showHide && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={toggleD}>show more</button>
    </div>
  );
}
