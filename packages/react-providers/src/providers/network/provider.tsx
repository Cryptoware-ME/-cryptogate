import React, { useEffect } from "react";
import { ChainId } from "../../constants/chains";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
import { NetworkContext } from "./context";
import { useEvmNode } from "../evmNode";

interface Props {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

export type NetworkDataType = {
  chainId: ChainId | undefined;
  chain: Chain | undefined;
};

export function NetworkProvider({ children, config }: Props) {
  const { provider } = useEvmNode();

  const [networkData, setNetworkData]: [
    NetworkDataType,
    React.Dispatch<React.SetStateAction<NetworkDataType>>
  ] = React.useState({} as NetworkDataType);

  useEffect(() => {
    setNetworkData({
      chainId: config.ethConfig?.defaultNetwork?.chainId,
      chain: config.ethConfig?.defaultNetwork,
    });
  }, [config]);

  const updateNetwork = async (chainId: ChainId) => {
    provider &&
      provider.send("wallet_switchEthereumChain", [{ chainId: chainId }]);
  };

  return (
    <NetworkContext.Provider
      value={{
        networkData,
        setNetworkData,
        updateNetwork,
      }}
      children={children}
    />
  );
}
