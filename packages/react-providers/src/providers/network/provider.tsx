import React, { useEffect } from "react";
import { ChainId } from "../../constants/chains";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
import { NetworkContext } from "./context";
import { getChainById } from "../../helpers";

interface Props {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

export type NetworkDataType = {
  chainId: ChainId | undefined;
  chain: Chain | undefined;
};

export function NetworkProvider({ children, config }: Props) {
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

  const updateNetwork = (_chainId: ChainId) => {
    _chainId &&
      setNetworkData({
        chainId: _chainId,
        chain: getChainById(_chainId),
      });
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
