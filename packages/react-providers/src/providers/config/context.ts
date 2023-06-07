import React from "react";
import { Chain } from "../../models/types";
import { MultiChainProviderConfigProps } from "../Multichain";
/**

Context object for providing multi-chain configuration.
@type {React.Context<MultiChainProviderConfigProps>}
@example
const configContext = React.createContext<MultiChainProviderConfigProps>({
ethConfig: { defaultNetwork: "mainnet", readOnlyUrls: { 1: "https://mainnet.infura.io/v3/your-infura-api-key" } },
});
*/
export const ConfigContext = React.createContext<MultiChainProviderConfigProps>(
  {
    ethConfig: {
      defaultNetwork: undefined as unknown as Chain,
      readOnlyUrls: {},
      wallets: [],
    },
  }
);
/**

Custom hook for accessing the configuration context.
@returns {MultiChainProviderConfigProps} The configuration context.
@example
const config = useConfig();
*/
export function useConfig() {
  const context = React.useContext(ConfigContext);
  return context;
}
