import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const expenseDataFinal = {
      ...expenseData,
      id: 'e' + Math.random().toString(),
    };

    props.onAddExpense(expenseDataFinal);
  };

  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
