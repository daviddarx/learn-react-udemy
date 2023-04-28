import Todo from './../models/todo';
import TodoItem from './TodoItem';

/**
 * Custom type for custom props, merged with FC props
 */

type Props = {
  items: Todo[];
};

/**
 * FC for Functional Component.
 * It then know's it's a react function component, with props.children.
 * FC is a generic type accepting generic type, our {} type for props.
 */
const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
