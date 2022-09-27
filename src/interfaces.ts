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
