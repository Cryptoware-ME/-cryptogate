import React from "react";
import { readContractCalls } from "@cryptogate/react-providers"
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
  const [data, setData] = React.useState(tokenList
    ? tokenList.map((token) => ({
      abi: ERC20,
      address: token,
      method,
      args,
    }))
    : [])

  return readContractCalls(data);
};
