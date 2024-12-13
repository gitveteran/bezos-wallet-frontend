import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryCard from "./SummaryCard";
import { mockTransactions, mockMerchants } from "../__mocks__/mockData";

test("renders correct summary calculations", () => {
  render(<SummaryCard transactions={mockTransactions} bezosMerchants={mockMerchants} />);

  // Verify total spend
  expect(screen.getByText("Total Spend: $680.00")).toBeInTheDocument();

  // Verify Bezos-related spend
  expect(screen.getByText("Bezos Spend: $510.00")).toBeInTheDocument();

  // Verify percentage of spend
  expect(screen.getByText("Percentage: 75.00%")).toBeInTheDocument();
});
