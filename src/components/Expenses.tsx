import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import { IExpenses } from '../interfaces';

const Expenses = ({ items }: IExpenses) => (
  <Card className="expenses">
    {items.map((expense) => {
      const data = { title: expense.title, amount: expense.amount, date: expense.date };
      return <ExpenseItem key={expense.id} data={data} />;
    })}
  </Card>
);

export default Expenses;
