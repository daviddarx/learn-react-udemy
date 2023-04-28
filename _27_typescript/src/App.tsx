import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const items = [new Todo('todo 1'), new Todo('todo 2'), new Todo('todo 3')];
  return (
    <div className='App'>
      <Todos items={items} />
    </div>
  );
}

export default App;
