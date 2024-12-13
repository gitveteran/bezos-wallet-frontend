import React from 'react';
import { render, screen, act } from '@testing-library/react';
import TransactionList from './TransactionList';
import { mockTransactions, mockMerchants, newMockTransaction } from '../__mocks__/mockData';

describe('TransactionList Component', () => {
  test('renders transaction list correctly', () => {
    render(<TransactionList transactions={mockTransactions} bezosMerchants={mockMerchants} onMarkMerchant={()=>{}}/>);
    const transactionItems = screen.getAllByRole('row');
    expect(transactionItems.length - 1).toBe(mockTransactions.length);
  });

  test('displays Bezos-related transactions with correct highlights', () => {
    const { container } = render(<TransactionList transactions={mockTransactions} bezosMerchants={mockMerchants} onMarkMerchant={()=>{}} />);
    const bezosTransactions = container.querySelectorAll('.MuiButton-colorPrimary');
    expect(bezosTransactions.length).toBeGreaterThan(0);
  });
});

describe('TransactionList Component Real-Time Updates', () => {
  jest.useFakeTimers(); // Use Jest timers to simulate time-based updates

  test('updates the transaction list in real time when new data is fetched', async () => {
    const updatedTransactions = [...mockTransactions]; // Initial transactions

    // Render the component
    const { rerender } = render(
      <TransactionList transactions={updatedTransactions} bezosMerchants={mockMerchants} onMarkMerchant={() => {}} />
    );

    // Check initial rows
    let transactionRows = screen.getAllByRole('row');
    expect(transactionRows.length - 1).toBe(mockTransactions.length);

    // Simulate new transaction being added in real-time
    act(() => {
      updatedTransactions.push(newMockTransaction);
      jest.advanceTimersByTime(1000); // Simulate delay (1 second)
    });

    // Re-render with updated transactions
    rerender(
      <TransactionList transactions={updatedTransactions} bezosMerchants={mockMerchants} onMarkMerchant={() => {}} />
    );

    // Check if new transaction is rendered
    transactionRows = screen.getAllByRole('row');
    expect(transactionRows.length - 1).toBe(mockTransactions.length + 1);

    // Verify new transaction details
    expect(screen.getByText(newMockTransaction.merchant_name)).toBeInTheDocument();
    expect(screen.getByText(newMockTransaction.date)).toBeInTheDocument();
  });
});
