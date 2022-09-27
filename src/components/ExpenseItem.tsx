import './ExpenseItem.css';

const ExpenseItem = () => (
  <div className="expense-item">
    <div>27 September 2022</div>
    <div className="expense-item__description">
      <h2>Telegram Ad</h2>
      <div className="expense-item__price">$52</div>
    </div>
  </div>
);

export default ExpenseItem;
