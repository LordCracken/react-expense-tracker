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
