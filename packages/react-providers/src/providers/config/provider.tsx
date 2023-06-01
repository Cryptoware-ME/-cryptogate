import React from "react";
import { MultiChainProviderConfigProps } from "../Multichain";
import { ConfigContext } from "./context";

interface Props {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}
/**

Provider component for configuring the multi-chain context.
@component
@param {Props} props - The component props.
@param {React.ReactNode} props.children - The child components.
@param {MultiChainProviderConfigProps} props.config - The configuration for the multi-chain context.
@returns {JSX.Element} The rendered component.
@example
const config = {
ethConfig: { defaultNetwork: "mainnet", readOnlyUrls: { 1: "https://mainnet.infura.io/v3/your-infura-api-key" } },
};
<ConfigProvider config={config}>
<App />
</ConfigProvider>
*/
export function ConfigProvider({ config, children }: Props) {
  const [DAppConfig, setDAppConfig]: [
    MultiChainProviderConfigProps,
    React.Dispatch<React.SetStateAction<MultiChainProviderConfigProps>>
  ] = React.useState({} as MultiChainProviderConfigProps);

  React.useEffect(() => {
    setDAppConfig({ ...config });
  }, [config]);

  return <ConfigContext.Provider value={DAppConfig} children={children} />;
}
