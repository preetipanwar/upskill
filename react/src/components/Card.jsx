import { useState } from 'react';
import { sculptureList } from '../data';

export default function Card2() {
  const [hide, setHide] = useState(true);
  const [index, setIndex] = useState(0);

  function previous() {
    if (index === 0) {
      setIndex(11);
      return;
    }
    setIndex(index - 1);
  }

  function next() {
    if (index === 11) setIndex(0);
    setIndex(index + 1);
  }
  return (
    <div className="card">
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
      {hide && <img src={sculptureList[index].url} alt="" />}
      <p> {sculptureList[index].artist}</p>
      <button onClick={() => setHide(!hide)}>Hide Image</button>
    </div>
  );
}
