import React from "react";
import { Button } from "@mui/joy";
import { isMerchantBezosRelated } from "./helpers";
import { Transaction, Merchant } from "../types/types";

interface TransactionRowProps {
  transaction: Transaction;
  bezosMerchants: Merchant[];
  onMarkMerchant: (merchant: string, isBezosRelated: boolean) => void;
}

/**
 * TransactionRow Component
 *
 * Renders a single row of a transaction with a button to mark/unmark as Bezos-related.
 */
const TransactionRow: React.FC<TransactionRowProps> = ({
  transaction,
  bezosMerchants,
  onMarkMerchant,
}) => {
  const bezosStatus = isMerchantBezosRelated(
    bezosMerchants,
    transaction.merchant_name
  );

  console.log(bezosMerchants, transaction);

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.merchant_name}</td>
      <td>${transaction.amount}</td>
      <td>
        <Button
          size="sm"
          onClick={() => onMarkMerchant(transaction.merchant_name, !bezosStatus)}
          color={bezosStatus ? "primary" : "warning"}
        >
          {bezosStatus ? "Mark not as Bezos" : "Mark as Bezos"}
        </Button>
      </td>
    </tr>
  );
};

export default TransactionRow;
