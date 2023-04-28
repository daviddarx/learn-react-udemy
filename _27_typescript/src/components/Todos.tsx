/**
 * Custom type for custom props, merged with FC props
 */
type props = {
  items: string[];
};

/**
 * FC for Functional Component.
 * It then know's it's a react function component, with props.children.
 * FC is a generic type accepting generic type, our {} type for props.
 */
const Todos: React.FC<props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
