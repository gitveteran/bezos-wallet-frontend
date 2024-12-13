import { gql } from "@apollo/client";

/* QUERIES */

/**
* Fetch all transactions.
* Returns:
* - id: Transaction ID
* - amount: Transaction amount
* - category: Array of transaction categories
* - date: Transaction date
* - merchant_name: Name of the merchant
*/
export const GET_TRANSACTIONS = gql`
  query {
    transactions {
      id
      amount
      category
      date
      merchant_name
    }
  }
`;

/**
* Fetch all Bezos-related merchants.
* Returns:
* - id: Merchant ID
* - merchant: Name of the merchant
* - isBezosRelated: Boolean indicating if the merchant is Bezos-related
*/
export const GET_MERCHANTS = gql`
  query {
    bezosMerchants {
      id
      merchant
      isBezosRelated
    }
  }
`

/* MUTATIONS */

/**
* Mark a merchant as Bezos-related or not.
* Parameters:
* - merchant: Name of the merchant
* - isBezosRelated: Boolean to mark/unmark as Bezos-related
* Returns:
* - id: Merchant ID
* - merchant: Merchant name
* - isBezosRelated: Updated boolean flag
*/
export const MARK_MERCHANT = gql`
  mutation MarkMerchant($merchant: String!, $isBezosRelated: Boolean!) {
    markMerchant(merchant: $merchant, isBezosRelated: $isBezosRelated) {
      id
      merchant
      isBezosRelated
    }
  }
`;

/* SUBSCRIPTIONS */

/**
 * Listen for real-time transaction updates.
 * Returns:
 * - id: Transaction ID
 * - amount: Transaction amount
 * - category: Array of transaction categories
 * - date: Transaction date
 * - merchant_name: Name of the merchant
 */
export const TRANSACTIONS_UPDATED = gql`
  subscription {
    transactionsUpdated {
      id
      amount
      category
      date
      merchant_name
    }
  }
`;
