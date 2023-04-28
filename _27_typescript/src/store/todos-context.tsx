import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

/**
 * Use generic type <> to describe the state
 */
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
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

  const removeTodo = (id: string) => {
    setItems((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: items,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
