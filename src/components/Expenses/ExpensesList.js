import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>There is no expenses for this year.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((item) => (
        <li>
          <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
