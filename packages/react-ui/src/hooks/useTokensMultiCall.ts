import { readContractCalls } from "@cryptogate/react-providers"
import { ERC20 } from "@cryptogate/core"

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
  return readContractCalls(
    tokenList
      ? tokenList.map((token) => ({
        abi: ERC20,
        address: token,
        method,
        args,
      }))
      : []
  )
};
