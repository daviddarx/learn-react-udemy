import { useRef } from 'react';

const NewTodo = () => {
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
     */
    const entededText = inputRef.current?.value;
    console.log('submit', entededText);
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
