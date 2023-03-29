import React from "react";
import { EvmAddress, readContractCalls } from "@cryptogate/react-providers"
import { ERC20 } from "@cryptogate/core"

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
