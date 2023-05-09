import State from './components/Adding-Interactivity/State'
import Card from './components/Card';
import Cards from './components/Cards';
import RespondingToEvents from './components/Adding-Interactivity/RespondingToEvents';

export default function App() {
  return (
    <>
      <div className="container">
        <RespondingToEvents buttonName = "do it" />
        <State />
        <Cards />
        <Card />
      </div>
    </>
  );
}
