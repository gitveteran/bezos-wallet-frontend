/** Represents a single transaction */
export interface Transaction {
  id: number;              // Unique identifier for the transaction
  amount: number;          // Transaction amount
  category: string[];      // List of categories for the transaction
  date: string;            // Date of the transaction (ISO string format)
  merchant_name: string;   // Name of the merchant
}

/** Represents a merchant and its Bezos-related status */
export interface Merchant {
  id: number;              // Unique identifier for the merchant
  merchant: string;        // Name of the merchant
  isBezosRelated: boolean; // Indicates if the merchant is Bezos-related
}
