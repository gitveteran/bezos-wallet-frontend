import React from "react";
import { Card, Typography } from "@mui/joy";
import { Transaction, Merchant } from "../types/types";
import { isMerchantBezosRelated } from "./helpers";

interface Props {
  transactions: Transaction[];      // Array of all transactions
  bezosMerchants: Merchant[];    // Array of Bezos-related merchants
}

/**
* SummaryCard Component
*
* Purpose:
* - Provides a summary of total spending and Bezos-related spending.
* - Calculates the total spend, Bezos spend, and the percentage of spend
*   associated with Bezos-related merchants.
*
* Props:
* - transactions: List of all transactions.
* - bezosMerchants: List of merchants marked as Bezos-related.
*/
const SummaryCard: React.FC<Props> = ({ transactions, bezosMerchants }) => {

  /**
  * Filter transactions to only include Bezos-related ones.
  */
  const bezosTransactions = transactions.filter((tx) =>
    isMerchantBezosRelated(bezosMerchants, tx.merchant_name)
  );

  /**
  * Calculate the total spend and Bezos-related spend.
  */
  const totalBezosSpend = bezosTransactions
    .reduce((sum, tx) => sum + tx.amount, 0)
    .toFixed(2);

  const totalSpend = transactions
    .reduce((sum, tx) => sum + tx.amount, 0)
    .toFixed(2);

  /**
  * Calculate the percentage of total spend that is Bezos-related.
  */
  const percentage =
    parseFloat(totalSpend) > 0
      ? ((parseFloat(totalBezosSpend) / parseFloat(totalSpend)) * 100).toFixed(2)
      : "0";

  return (
    <Card variant="outlined" sx={{ mb: 3, p: 2 }}>
      {/* Title */}
      <Typography level="h3">Bezos Spend Summary</Typography>

      {/* Summary Details */}
      <Typography>Total Spend: ${totalSpend}</Typography>
      <Typography>Bezos Spend: ${totalBezosSpend}</Typography>
      <Typography>Percentage: {percentage}%</Typography>
    </Card>
  );
};

export default SummaryCard;
