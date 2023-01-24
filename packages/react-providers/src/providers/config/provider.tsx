import React from "react";
import { MultiChainProviderConfigProps } from "../Multichain";
import { ConfigContext } from "./context";

/**
 * Props for the ConfigProvider component
 *
 * @interface Props
 */
interface Props {
  children: React.ReactNode;
  config: MultiChainProviderConfigProps;
}

/**
 * @description ConfigProvider component sets up and provides a configuration context for the application to consume
 * @export
 * @param {Props} { config, children }
 * @returns {JSX.Element}
 */
export function ConfigProvider({ config, children }: Props): JSX.Element {
  /**
   * DAppConfig and setDAppConfig are state variables that used to store the configuration context
   */
  const [DAppConfig, setDAppConfig]: [
    MultiChainProviderConfigProps,
    React.Dispatch<React.SetStateAction<MultiChainProviderConfigProps>>
  ] = React.useState({} as MultiChainProviderConfigProps);

  /**
   * useEffect hook is used to update the DAppConfig state variable with the passed in config prop when it changes
   */
  React.useEffect(() => {
    setDAppConfig({ ...config });
  }, [config]);
  return <ConfigContext.Provider value={DAppConfig} children={children} />;
}
