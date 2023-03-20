import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const openForm = () => {
    setIsFormOpened(true);
  };

  const closeForm = () => {
    setIsFormOpened(false);
  };

  const saveExpenseDataHandler = (expenseData) => {
    const expenseDataFinal = {
      ...expenseData,
      id: 'e' + Math.random().toString(),
    };

    props.onAddExpense(expenseDataFinal);
    closeForm();
  };

  return (
    <Card className='new-expense'>
      {isFormOpened ? (
        <ExpenseForm onCancel={closeForm} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={openForm}>Add new Expense</button>
      )}
    </Card>
  );
};

export default NewExpense;
