import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onFilter={filterHandler} />

      {filteredExpenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      ))}
    </Card>
  );
};

export default Expenses;
