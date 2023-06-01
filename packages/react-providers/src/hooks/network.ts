import React from "react";
import * as ethers from "ethers";
import { useEvmNode } from "../providers";

/**

Custom hook for accessing network information on the Ethereum blockchain.
@public
@return {gasPrice: ethers.BigNumber | undefined} - The gas price of the current network.
@example
const { gasPrice } = useNetworkInfo();
*/
export const useNetworkInfo = (): {
  gasPrice: ethers.BigNumber | undefined;
} => {
  const { provider } = useEvmNode();

  const [gasPrice, setGasPrice]: [
    ethers.BigNumber | undefined,
    React.Dispatch<React.SetStateAction<ethers.BigNumber | undefined>>
  ] = React.useState();

  React.useEffect(() => {
    if (provider) {
      provider.getGasPrice().then((_gasPrice) => {
        if (_gasPrice) setGasPrice(_gasPrice);
      });
    }
  }, [provider]);

  return {
    gasPrice,
  };
};
