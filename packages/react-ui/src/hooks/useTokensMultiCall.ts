import { useDapp } from "@cryptogate/react-providers";

const { ERC20Interface, useContractCalls } = useDapp;

export const useTokensMultiCall = ({
  tokenList,
  method,
  format = false,
  args = [],
}: {
  tokenList: string[];
  method: string;
  format?: boolean;
  args?: any[];
}) => {
  return useContractCalls(
    tokenList
      ? tokenList.map((token) => ({
          abi: ERC20Interface,
          address: token,
          method,
          args,
        }))
      : []
  );
};
