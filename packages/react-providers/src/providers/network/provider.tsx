import React from "react";
import { ChainId } from "../../constants/chains";
import { getChainById } from "../../helpers";
import { Chain } from "../../models/types";
import { NetworkContext } from "./context";

type Props = {
  children: React.ReactNode;
};

export interface NetworkDataInterface {
  chainId: ChainId;
  chain: Chain | undefined;
}

export function NetworkProvider({ children }: Props) {
  const [networkData, setNetworkData]: [
    NetworkDataInterface,
    React.Dispatch<React.SetStateAction<NetworkDataInterface>>
  ] = React.useState({
    chainId: ChainId.Mainnet,
    chain: getChainById(ChainId.Mainnet),
  } as NetworkDataInterface);

  return (
    <NetworkContext.Provider
      value={{
        networkData, setNetworkData
      }}
      children={children}
    />
  );
}
