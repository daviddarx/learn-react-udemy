import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  /**
   * Pick the part of the state that we want.
   * React-redux will automatically set a subscriber for this to get the state updated.
   */
  const counter = useSelector((state) => state.counter.counter);
  const shown = useSelector((state) => state.counter.shown);

  /**
   * Retrieve a function to dispatch the actions.
   */
  const dispatchFn = useDispatch();

  const incrementHandler = () => {
    dispatchFn(counterActions.increment());
  };

  const increaseHandler = (amount) => {
    /**
     * The redux-toolkit counterActions.method() returns an
     * action object: { type: SOME UNIQUER_IDENTIFIER, payload: [amount] }
     */
    dispatchFn(counterActions.increase(amount));
  };

  const decrementHandler = () => {
    dispatchFn(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatchFn(counterActions.toogle());
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
