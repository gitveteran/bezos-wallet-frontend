import { Transaction, Merchant } from "../types/types";

export const mockTransactions: Transaction[] = [
  {
    id: 1,
    merchant_name: 'Amazon',
    amount: 100.0,
    date: '2029-01-01',
    category: [],
  },
  {
    id: 2,
    merchant_name: 'Whole Foods',
    amount: 50.0,
    date: '2029-01-02',
    category: [],
  },
  {
    id: 3,
    merchant_name: 'Starbucks',
    amount: 10.0,
    date: '2029-01-03',
    category: [],
  },
  {
    id: 4,
    merchant_name: 'Blue Origin',
    amount: 500.0,
    date: '2029-01-04',
    category: [],
  },
  {
    id: 5,
    merchant_name: 'Lyft',
    amount: 20.0,
    date: '2029-01-05',
    category: [],
  },
];

export const mockMerchants: Merchant[] = [
  {
    id: 1,
    merchant: 'Blue Origin',
    isBezosRelated: true,
  },
  {
    id: 2,
    merchant: 'Lyft',
    isBezosRelated: false,
  },
  {
    id: 3,
    merchant: 'Starbucks',
    isBezosRelated: true,
  },
];

export const newMockTransaction: Transaction = {
  id: 6,
  merchant_name: 'Prime Video',
  amount: 20.0,
  date: '2029-01-06',
  category: [],
};
