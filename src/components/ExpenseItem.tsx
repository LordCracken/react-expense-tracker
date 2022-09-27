import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { IExpenseItemData } from '../interfaces';

const ExpenseItem = ({ data }: { data: IExpenseItemData }) => {
  const { title: expenseTitle, amount: expenseAmount, date: expenseDate } = data;

  return (
    <div className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
