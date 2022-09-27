import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import { IExpenseItemData } from '../interfaces';

const Expenses = ({ items }: { items: IExpenseItemData[] }) => (
  <div className="expenses">
    {items.map((expense) => {
      const data = { title: expense.title, amount: expense.amount, date: expense.date };
      return <ExpenseItem key={expense.id} data={data} />;
    })}
  </div>
);

export default Expenses;
