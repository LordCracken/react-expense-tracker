import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { IExpenseItemData, INewExpense } from '../../interfaces';

const NewExpense = ({ onAddExpense }: INewExpense) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItemData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;
