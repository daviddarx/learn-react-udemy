import Todos from './components/Todos';

function App() {
  const items = ['Todo 1', 'Todo 2', 'Todo 3'];

  return (
    <div className='App'>
      <Todos items={items} />
    </div>
  );
}

export default App;
