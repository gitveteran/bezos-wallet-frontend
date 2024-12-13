import React from "react";
import { Container, Sheet } from "@mui/joy";
import TransactionList from "../components/TransactionList";
import SummaryCard from "../components/SummaryCard";
import { useTransactions } from "../hooks/useTransactions";
import { useMerchants } from "../hooks/useMerchants";

/**
* HomePage Component
* 
* Combines transactions and Bezos-related merchants into a single view.
* - Fetches transactions using `useTransactions` hook.
* - Fetches and manages Bezos-related merchants using `useMerchants` hook.
* - Displays a summary and list of transactions.
*/
const HomePage: React.FC = () => {
  const { transactions } = useTransactions();
  const { bezosMerchants, handleMarkMerchant } = useMerchants();

  return (
    <Sheet
      sx={{
        p: 4,
        backgroundColor: "neutral.plainHoverBg",
      }}
    >
      <Container>
        {/* Summary Card Component */}
        <SummaryCard
          transactions={transactions}
          bezosMerchants={bezosMerchants}
        />

        {/* Transaction List Component */}
        <TransactionList
          transactions={transactions}
          bezosMerchants={bezosMerchants}
          onMarkMerchant={handleMarkMerchant}
        />
      </Container>
    </Sheet>
  );
};

export default HomePage;
