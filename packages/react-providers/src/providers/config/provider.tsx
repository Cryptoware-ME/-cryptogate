import React from "react";
import { MultiChainProviderConfigProps } from "../Multichain";
import { ConfigContext } from "./context";

type Props = {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
};

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
