import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import { IExpenseItem } from '../interfaces';

const ExpenseItem = ({ data }: IExpenseItem) => {
  const { title: expenseTitle, amount: expenseAmount, date: expenseDate } = data;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
