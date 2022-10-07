import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { IExpenses } from '../../interfaces';

const Expenses = ({ items }: IExpenses) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [filteredYear, setFilteredYear] = useState<number>(currentYear);

  const filterChangeHandler = (selectedYear: number) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(expense => expense.date.getFullYear() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={currentYear}
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        const data = { title: expense.title, amount: expense.amount, date: expense.date };
        return <ExpenseItem key={expense.id} data={data} />;
      })}
    </Card>
  );
};

export default Expenses;
