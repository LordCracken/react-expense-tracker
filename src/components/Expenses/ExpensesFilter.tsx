import { ChangeEvent } from 'react';

import { IExpensesFilter } from '../../interfaces';
import './ExpensesFilter.css';

const ExpensesFilter = ({ currentYear, selectedYear, onFilterChange }: IExpensesFilter) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(+event.target.value);
  };

  const yearsList = [];

  for (let i = 2019; i <= currentYear; i++) {
    yearsList.push(i);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={dropdownChangeHandler}>
          {yearsList.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
