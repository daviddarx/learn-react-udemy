import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);

  /**
   * Need to specify which element we want to store.
   *  - HTMLInputElement is a built-in type.
   *  - HTMLButtonElement, etc.
   * Need to intiate with null.
   */
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * React FormEvent for onSubmit
   */
  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * Need ? on current, in case it's not defined (initally set to null)
     * Or here, we know we'll have it, then we can declare it imperatively with !
     */
    const entededText = inputRef.current!.value;

    if (entededText?.trim().length === 0) {
      return;
    }

    todosContext.addTodo(entededText);
  };

  /**
   * React MouseEvent for onClick
   */
  const clickListener = (e: React.MouseEvent) => {
    console.log(e.target);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor='text'>Todo text</label>
      <input ref={inputRef} id='text' type='text' />
      <button onClick={clickListener}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
