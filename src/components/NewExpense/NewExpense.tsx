import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { IExpenseItemData, INewExpense } from '../../interfaces';

const NewExpense = ({ onAddExpense }: INewExpense) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItemData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
