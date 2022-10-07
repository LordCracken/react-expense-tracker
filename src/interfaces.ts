import { ReactNode } from 'react';

export interface ICard {
  children: ReactNode;
  className: string;
}

export interface IExpenseItemData {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

export interface IExpenses {
  items: IExpenseItemData[];
}

export interface IExpenseItem {
  data: IExpenseItemData;
}

export interface IExpenseDate {
  date: Date;
}

export interface INewExpense {
  onAddExpense: (expense: IExpenseItemData) => void;
}

export interface IExpenseForm {
  onSaveExpenseData: (expenseData: IExpenseItemData) => void;
  onCancel: () => void;
}

export interface IExpensesFilter {
  currentYear: number;
  selectedYear: number;
  onFilterChange: (selectedYear: number) => void;
}

export interface IDataPoint {
  value: number;
  label: string;
  maxValue?: number | null;
}

export interface IChart {
  dataPoints: IDataPoint[];
}

export interface IExpensesChart {
  expenses: IExpenseItemData[];
}
