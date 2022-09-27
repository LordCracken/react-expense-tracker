import './ExpenseItem.css';

interface IExpenseItemData {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = ({ data }: { data: IExpenseItemData }) => {
  const { title: expenseTitle, amount: expenseAmount, date: expenseDate } = data;

  return (
    <div className="expense-item">
      <div>
        {expenseDate.toLocaleDateString('us-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
