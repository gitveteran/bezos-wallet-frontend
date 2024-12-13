import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TransactionRow from "./TransactionRow";
import { mockMerchants, newMockTransaction } from "../__mocks__/mockData";

const mockOnMarkMerchant = jest.fn();

describe("TransactionRow Component", () => {
  test("renders transaction row correctly", () => {
    render(
      <TransactionRow
        transaction={newMockTransaction}
        bezosMerchants={mockMerchants}
        onMarkMerchant={mockOnMarkMerchant}
      />
    );

    // Verify the rendered transaction details
    expect(screen.getByText("2029-01-06")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
    expect(screen.getByText("Prime Video")).toBeInTheDocument();

    // Verify button text for Bezos-related merchants
    expect(screen.getByRole("button", { name: "Mark as Bezos" })).toBeInTheDocument();
  });

  test("calls onMarkMerchant callback with correct arguments when button is clicked", () => {
    render(
      <TransactionRow
        transaction={newMockTransaction}
        bezosMerchants={mockMerchants}
        onMarkMerchant={mockOnMarkMerchant}
      />
    );

    // Find and click the button
    const button = screen.getByRole("button", { name: "Mark as Bezos" });
    fireEvent.click(button);

    // Check that the callback is called with correct arguments
    expect(mockOnMarkMerchant).toHaveBeenCalledWith("Prime Video", true);
  });

  test("displays 'Mark as Bezos' for non-Bezos merchants", () => {
    // Empty Bezos merchants to simulate non-Bezos merchants
    render(
      <TransactionRow
        transaction={newMockTransaction}
        bezosMerchants={[]}
        onMarkMerchant={mockOnMarkMerchant}
      />
    );

    // Verify button text for non-Bezos merchants
    expect(screen.getByRole("button", { name: "Mark as Bezos" })).toBeInTheDocument();
  });

  test("calls onMarkMerchant to mark as Bezos when clicked for a non-Bezos merchant", () => {
    // Empty Bezos merchants to simulate non-Bezos merchants
    render(
      <TransactionRow
        transaction={newMockTransaction}
        bezosMerchants={[]}
        onMarkMerchant={mockOnMarkMerchant}
      />
    );

    // Click the button
    const button = screen.getByRole("button", { name: "Mark as Bezos" });
    fireEvent.click(button);

    // Verify callback is called to mark the merchant as Bezos
    expect(mockOnMarkMerchant).toHaveBeenCalledWith("Prime Video", true);
  });
});
