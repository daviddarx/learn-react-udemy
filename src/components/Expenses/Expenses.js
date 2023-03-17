import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('Filter update', selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onFilter={filterHandler} />

      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      ))}
    </Card>
  );
};

export default Expenses;
