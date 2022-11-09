import React, { useEffect } from "react";
import { ChainId } from "../../constants/chains";
import { getChainById } from "../../helpers";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
import { NetworkContext } from "./context";

type Props = {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
};

export interface NetworkDataInterface {
  chainId: ChainId;
  chain: Chain | undefined;
}

export function NetworkProvider({ children, config }: Props) {
  const [networkData, setNetworkData]: [
    NetworkDataInterface,
    React.Dispatch<React.SetStateAction<NetworkDataInterface>>
  ] = React.useState({} as NetworkDataInterface);

  useEffect(() => {
    setNetworkData({
      chainId:
        config.ethConfig.defaultNetwork?.chainId ??
        Number(Object.keys(config.ethConfig.readOnlyUrls)[0]),
      chain:
        config.ethConfig.defaultNetwork ??
        getChainById(Number(Object.keys(config.ethConfig.readOnlyUrls)[0])),
    });
  }, [config]);

  return (
    <NetworkContext.Provider
      value={{
        networkData,
        setNetworkData,
      }}
      children={children}
    />
  );
}
