import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>There is no expenses for this year.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((item) => (
        <li key={item.id}>
          <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
