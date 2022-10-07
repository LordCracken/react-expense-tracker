import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import { IExpenseItemData, IExpenses } from '../../interfaces';

const ExpensesList = ({ items }: IExpenses) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense: IExpenseItemData) => {
        const data = { title: expense.title, amount: expense.amount, date: expense.date };
        return <ExpenseItem key={expense.id} data={data} />;
      })}
    </ul>
  );
};

export default ExpensesList;
