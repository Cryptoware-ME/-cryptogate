import React from "react";
import { DEFAULT_MULTICHAIN_CONFIG } from "../../constants/config";
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

  const joinConfigs = (
    A: MultiChainProviderConfigProps,
    B: MultiChainProviderConfigProps
  ) => {
    let res: any = {};
    Object.keys({ ...A.ethConfig, ...B.ethConfig }).map((key: any) => {
      res[key] = B.ethConfig[key] ?? A.ethConfig[key];
    });
    return res;
  };

  React.useEffect(() => {
    const joinedConfig = joinConfigs(DEFAULT_MULTICHAIN_CONFIG, config);
    setDAppConfig({ ethConfig: { ...joinedConfig } });
  }, [config]);

  return <ConfigContext.Provider value={DAppConfig} children={children} />;
}
