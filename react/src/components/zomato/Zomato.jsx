import Card from './Card';
import Main from './Main';
import './zomato.css';

export default function Zomato() {
  return (
    <>
      <Main />
      <div className="cardwrapper">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
