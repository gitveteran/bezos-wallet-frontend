import { Merchant } from "../types/types";
/**
* Checks if a merchant is Bezos-related.
* @param bezosMerchants - List of Bezos-related merchants.
* @param merchantName - The name of the merchant to check.
* @returns boolean - True if the merchant is Bezos-related, otherwise false.
*/
export const isMerchantBezosRelated = (
  bezosMerchants: Merchant[],
  merchantName: string
): boolean => {
  const merchant = bezosMerchants.find((m) => m.merchant === merchantName);
  return merchant?.isBezosRelated ?? false;
};
