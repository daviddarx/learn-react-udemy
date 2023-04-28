import { useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

/**
 * FC for Functional Component.
 * It then know's it's a react function component, with props.children.
 * FC is a generic type accepting generic type, our {} type for props.
 */
const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
