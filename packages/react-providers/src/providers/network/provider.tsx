import React, { useEffect } from "react";
import { ChainId } from "../../constants/chains";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
import { NetworkContext } from "./context";

interface Props {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

export type NetworkDataType = {
  chainId: ChainId | undefined;
  chain: Chain | undefined;
};

/**

Provider component for managing network data related to the Ethereum network.
@component
@param {Props} props - The component props.
@param {React.ReactNode} props.children - The child components.
@param {MultiChainProviderConfigProps} props.config - The configuration for the multi-chain provider.
@returns {JSX.Element} The rendered component.
@example
<NetworkProvider config={config}>
<App />
</NetworkProvider>
*/

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
