import Beauty from './Beauty';
import Scrollbar from './Scrollbar';

export default function Wrapper() {
  return (
    <div className="wrapper">
      <button className="prev-btn">
        <p>&lt;</p>
      </button>
      <button className="next-btn">
        <p>&gt;</p>
      </button>
      <div className="slidebar">
        <Scrollbar />
        <Scrollbar />
        <Scrollbar />
        <Scrollbar />
      </div>
    </div>
  );
}
