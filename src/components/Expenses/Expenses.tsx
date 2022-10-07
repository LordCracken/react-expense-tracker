import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { IExpenseItemData, IExpenses } from '../../interfaces';

const Expenses = ({ items }: IExpenses) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [filteredYear, setFilteredYear] = useState<number>(currentYear);

  const filterChangeHandler = (selectedYear: number) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses: IExpenseItemData[] = items.filter(
    (expense) => expense.date.getFullYear() === filteredYear,
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={currentYear}
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
