import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  /**
   * useState is a generic function, so we can set the generic type <Todo[]>.
   * If we don't do that, it will always expect an inferred empty array (never[])
   */
  const [items, setItems] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = new Todo(text);

    setItems((prev) => {
      return prev.concat(newTodo);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={items} />
    </div>
  );
}

export default App;
