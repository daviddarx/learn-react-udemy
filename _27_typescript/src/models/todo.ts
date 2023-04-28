/**
 * Type approach
 */
// type Todo = {
//   id: string;
//   title: string;
// };

/**
 * Class approach
 * Allow to initalize certain props on the go.
 * Class not only works as a constructor function, but also as a Type.
 */
class Todo {
  // In TS, need to declare the properties first
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString() + Math.random();
    this.text = todoText;
  }
}

export default Todo;
