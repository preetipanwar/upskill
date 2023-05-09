import State from './components/Adding-Interactivity/State'
import Card from './components/tasks/Card';
import Cards from './components/tasks/Cards';
import RespondingToEvents from './components/Adding-Interactivity/RespondingToEvents';
import TodoList from './components/tasks/Todo';
import Fruits from './components/tasks/fruits';

export default function App() {
  return (
    <>
      <div className="container">
        <State />
        <RespondingToEvents buttonName = "do it" />
        <Fruits />
        <TodoList />
        <Cards />
        <Card />
      </div>
    </>
  );
}
