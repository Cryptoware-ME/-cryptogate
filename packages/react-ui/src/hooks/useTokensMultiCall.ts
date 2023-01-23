import React from "react";
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
