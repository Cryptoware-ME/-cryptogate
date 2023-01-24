import React, { useEffect } from "react";
import { ChainId } from "../../constants/chains";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
import { NetworkContext } from "./context";

/**
 * Props for the NetworkProvider component.
 * Expects a children prop to render and a config prop which is a MultiChainProviderConfigProps object.
 */
interface Props {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

/**
 * The NetworkDataType represents the shape of the network data.
 * It contains the chainId and chain.
 */
export type NetworkDataType = {
  chainId: ChainId;

  chain: Chain | undefined;
};

/**
 * A provider component for the NetworkContext.
 * It maintains the state of the networkData, which contains chainId and chain,
 * and sets the initial networkData based on the config prop.
 * @param Props - Expects a children prop to render and a config prop which is a MultiChainProviderConfigProps object.
 */
export function NetworkProvider({ children, config }: Props) {
  /**
   * The state of the networkData, which is an object containing chainId and chain.
   * The setNetworkData function is used to update the networkData state.
   */
  const [networkData, setNetworkData]: [
    NetworkDataType,
    React.Dispatch<React.SetStateAction<NetworkDataType>>
  ] = React.useState({} as NetworkDataType);

  /**
   * React.useEffect Hook that sets the initial networkData based on the config prop.
   */
  useEffect(() => {
    if (config) {
      setNetworkData({
        chainId: config.ethConfig.defaultNetwork.chainId,
        chain: config.ethConfig.defaultNetwork,
      });
    }
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
