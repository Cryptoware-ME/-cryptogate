import React from "react";
import { EvmNodeContext } from "./context";
import { NodeUrls } from "../../models/types";
import { providers } from "ethers";
import { useNetwork } from "../network";

/**
 * Props for the EvmNodeProvider component.
 * Expects children prop to render and readOnlyUrls prop which is a NodeUrls object.
 */
interface Props {
  children: React.ReactNode;
  readOnlyUrls: NodeUrls;
}

/**
 * A provider component for the EvmNodeContext.
 * It maintains the state of the provider and sets it to a new JsonRpcProvider
 * using the readOnlyUrls and the networkData from the useNetwork hook.
 * @param Props - Expects children prop to render and readOnlyUrls prop which is a NodeUrls object.
 */
export function EvmNodeProvider({ children, readOnlyUrls }: Props) {
  /**
   * The state of the provider, which can be either a JsonRpcProvider or a Web3Provider.
   * The setProvider function is used to update the provider state.
   */
  const [provider, setProvider]: [
    providers.JsonRpcProvider | providers.Web3Provider | undefined,
    React.Dispatch<
      React.SetStateAction<
        providers.JsonRpcProvider | providers.Web3Provider | undefined
      >
    >
  ] = React.useState();
  const { networkData } = useNetwork();

  /**
   * React.useEffect Hook that sets the provider state to a new JsonRpcProvider
   * using the readOnlyUrls and the networkData from the useNetwork hook.
   */
  React.useEffect(() => {
    if (!provider && readOnlyUrls[networkData.chainId]) {
      let _provider = new providers.JsonRpcProvider(
        readOnlyUrls[networkData.chainId]
      );
      setProvider(_provider);
    }
  }, [networkData, readOnlyUrls]);

  return (
    <EvmNodeContext.Provider
      value={{ provider, setProvider }}
      children={children}
    />
  );
}
