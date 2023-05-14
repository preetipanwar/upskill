import RespondingToEvents from '../Adding-Interactivity/RespondingToEvents';
import State from '../Adding-Interactivity/State';
import Card2 from './Card';
import Cards from './Cards';
import TodoList from './Todo';
import Fruits from './fruits';
import './tasks.css';

export default function EventsWrapper() {
  return (
    <div className="container">
      <State />
      <RespondingToEvents buttonName="do it" />
      <Fruits />
      <TodoList />
      <Cards />
      <Card2 />
    </div>
  );
}
