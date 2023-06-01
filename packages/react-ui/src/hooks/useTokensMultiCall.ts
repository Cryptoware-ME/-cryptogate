import React from "react";
import { EvmAddress, readContractCalls } from "@cryptogate/react-providers"
import { ERC20 } from "@cryptogate/core"

/**

The useTokensMultiCall hook retrieves information for multiple tokens using a specific method.
@param {Object} options - The options for the hook.
@param {string[]} options.tokenList - The array of token addresses.
@param {string} options.method - The method to call on the token contracts.
@param {any[]} [options.args=[]] - Additional arguments for the method call.
@returns {any} The result of the contract calls.
@example
// Example usage
const tokenList = ["0x123...", "0x456..."];
const method = "balanceOf";
const args = [account];
const result = useTokensMultiCall({ tokenList, method, args });
*/


export const useTokensMultiCall = ({
  tokenList,
  method,
  args = [],
}: {
  tokenList: string[];
  method: string;
  args?: any[];
}) => {
  const [data, _] = React.useState(tokenList
    ? tokenList.map((token) => ({
      abi: ERC20,
      address: token as EvmAddress,
      method,
      args,
    }))
    : [])

  return readContractCalls(data);
};
