import { useQuery, useMutation } from "@apollo/client";
import { GET_MERCHANTS, MARK_MERCHANT } from "../api/graphql";
import { useState, useEffect } from "react";
import { Merchant } from "../types/types";

/**
* Custom hook to manage Bezos-related merchants.
* Returns:
* - bezosMerchants: List of Bezos-related merchants.
* - handleMarkMerchant: Function to mark/unmark a merchant as Bezos-related.
*/
export const useMerchants = () => {
  const [bezosMerchants, setBezosMerchants] = useState<Merchant[]>([]);

  // Fetch all Bezos-related merchants
  const { data: merchantData } = useQuery(GET_MERCHANTS);

  // Mutation to mark/unmark a merchant
  const [markMerchant] = useMutation(MARK_MERCHANT);

  // Set initial merchants when query data is fetched
  useEffect(() => {
    if (merchantData?.bezosMerchants) {
      setBezosMerchants(merchantData.bezosMerchants);
    }
  }, [merchantData]);

  /**
  * Marks or unmarks a merchant as Bezos-related.
  * @param merchant - The name of the merchant.
  * @param isBezosRelated - Boolean flag to mark/unmark.
  */
  const handleMarkMerchant = (merchant: string, isBezosRelated: boolean) => {
    markMerchant({ variables: { merchant, isBezosRelated } }).then(({ data }) => {
      if (!data?.markMerchant) return;

      setBezosMerchants((prevMerchants) => {
        const updatedMerchant = data.markMerchant;

        // Check if the merchant already exists
        const merchantExists = prevMerchants.some(
          (m) => m.merchant === updatedMerchant.merchant
        );

        // Update existing merchant or add new merchant
        return merchantExists
          ? prevMerchants.map((m) =>
              m.merchant === updatedMerchant.merchant
                ? { ...m, isBezosRelated: updatedMerchant.isBezosRelated }
                : m
            )
          : [...prevMerchants, updatedMerchant];
      });
    });
  };

  return { bezosMerchants, handleMarkMerchant };
};
