import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      {/* toISOString() is needed as React can't print an object as a text */}
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>
          ${props.amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
