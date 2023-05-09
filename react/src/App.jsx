import Gallery from './components/Gallery'
import Card from './components/Card';
import Cards from './components/Cards';
import RespondingToEvents from './components/Adding-Interactivity/RespondingToEvents';

export default function App() {
  return (
    <>
      <div className="container">
       <RespondingToEvents buttonName = "do it" />
        <Gallery />
        <Cards />
        <Card />
      </div>
    </>
  );
}
