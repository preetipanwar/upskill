import { useState } from 'react';
import { sculptureList } from '../data';

export default function Cards() {
  const [index, setIndex] = useState(0);
  const [showHideDesc, setShowHideDesc] = useState(false);

  function increment() {
    setIndex(index + 1);
    if (index === sculptureList.length - 1) setIndex(0);
  }
  function showHide() {
    setShowHideDesc(!showHideDesc);
  }

  return (
    <div className="card">
      <button onClick={increment}>Next</button>
      <h2>
        <i>{sculptureList[index].name} </i> by {sculptureList[index].artist}
      </h2>
      <p>
        {index + 1} to {sculptureList.length}
      </p>
      {showHideDesc && <p>{sculptureList[index].description}</p>}
      <img src={sculptureList[index].url} />
      <button onClick={showHide}>show/hide</button>
    </div>
  );
}

// 1. create a new Component Card2.jsx and create a similar component
//      <div className="card">
//          <img src={} />
//          <p>artist</p>
//          <button>Hide Image</button>
//      </div>

// 2. import sculptureList and only use the first object to fill the details:
//  artist and url for image

// 3. When Hide button is clicked the image should hide (don't worry about unhidding)

// 4. Add two buttons Prev and Next
// Next should show the content of next object
// Prev should show us the content of last object
