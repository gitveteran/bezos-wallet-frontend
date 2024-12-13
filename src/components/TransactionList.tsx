import React from "react";
import { Table, Typography } from "@mui/joy";
import TransactionRow from "./TransactionRow";
import { Transaction, Merchant } from "../types/types";

interface Props {
  transactions: Transaction[]; // List of all transactions
  bezosMerchants: Merchant[]; // List of Bezos-related merchants
  onMarkMerchant: (merchant: string, isBezosRelated: boolean) => void; // Handler to mark/unmark merchants
}

/**
 * TransactionList Component
 *
 * Displays a table of transactions and allows users to mark/unmark merchants as Bezos-related.
 */
const TransactionList: React.FC<Props> = ({
  transactions,
  bezosMerchants,
  onMarkMerchant,
}) => {
  return (
    <>
      {/* Header */}
      <Typography level="h4" mb={2}>
        Transactions
      </Typography>

      {/* Transactions Table */}
      <Table aria-label="transaction table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <TransactionRow
              key={tx.id}
              transaction={tx}
              bezosMerchants={bezosMerchants}
              onMarkMerchant={onMarkMerchant}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionList;
