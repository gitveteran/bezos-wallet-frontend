import { useQuery, useSubscription } from "@apollo/client";
import { GET_TRANSACTIONS, TRANSACTIONS_UPDATED } from "../api/graphql";
import { useState, useEffect } from "react";

/**
* Custom hook to manage transactions and listen for real-time updates.
* Returns:
* - transactions: List of transactions.
*/
export const useTransactions = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  // Fetch all transactions
  const { data: transData } = useQuery(GET_TRANSACTIONS);

  // Listen for transaction updates via subscription
  useSubscription(TRANSACTIONS_UPDATED, {
    onData: ({ data }) => {
      const updatedTransactions = data?.data?.transactionsUpdated || [];
      setTransactions(() => [...updatedTransactions]);
    },
  });

  // Set initial transactions when query data is fetched
  useEffect(() => {
    if (transData?.transactions) {
      setTransactions(transData.transactions);
    }
  }, [transData]);

  return { transactions };
};
