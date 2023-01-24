import { readContractCalls } from "@cryptogate/react-providers"
import { ERC20 } from "@cryptogate/core"

/**
 * @param param.tokenList - List of tokens to call.
 * @param param.method - Method to call on contract.
 * @param param.format - Whether to format the result or not.
 * @param param.args - Arguments to pass to the contract method.
 * @description - A custom hook that calls a contract method on multiple ERC20 tokens at once.
 */

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
