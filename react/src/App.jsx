import Gallery from './components/Gallery'
import Card from './components/Card';
import Cards from './components/Cards';

export default function App() {
  return (
    <>
      <div className="container">
        <Gallery />
        <Cards />
        <Card />
      </div>
    </>
  );
}
