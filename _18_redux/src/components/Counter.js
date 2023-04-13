import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  /**
   * Pick the part of the state that we want.
   * React-redux will automatically set a subscriber for this to get the state updated.
   */
  const counter = useSelector((state) => state.counter);
  const shown = useSelector((state) => state.shown);

  /**
   * Retrieve a function to dispatch the actions.
   */
  const dispatchFn = useDispatch();

  const incrementHandler = () => {
    dispatchFn({ type: 'increment' });
  };

  const increaseHandler = (amount) => {
    dispatchFn({ type: 'increase', amount: amount });
  };

  const decrementHandler = () => {
    dispatchFn({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatchFn({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {shown && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increase by 5</button>
        <button onClick={increaseHandler.bind(null, 10)}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
