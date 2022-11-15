import { readContractCalls } from "../../cryptogate"
import { useDapp } from "@cryptogate/react-providers";

const { ERC20Interface } = useDapp;

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
        abi: ERC20Interface,
        address: token,
        method,
        args,
      }))
      : []
  )
};
