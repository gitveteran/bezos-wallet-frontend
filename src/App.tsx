import React from "react";
import { useTransactions } from "./hooks/useTransactions";

const App: React.FC = () => {
  useTransactions();
  return (
    <>Hello Bezos Wallet!</>
  )
};

export default App;
