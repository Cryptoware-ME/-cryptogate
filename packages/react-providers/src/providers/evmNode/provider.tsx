import React from "react";
import { EvmNodeContext } from "./context";
import { NodeUrls } from "../../models/types";
import { providers } from "ethers";
import { useNetwork } from "../network";

type Props = {
  children: React.ReactNode;
  readOnlyUrls: NodeUrls;
};

export function EvmNodeProvider({ children, readOnlyUrls }: Props) {
  const [provider, setProvider]: [
    providers.JsonRpcProvider | providers.Web3Provider | undefined,
    React.Dispatch<
      React.SetStateAction<
        providers.JsonRpcProvider | providers.Web3Provider | undefined
      >
    >
  ] = React.useState();
  const { networkData } = useNetwork();

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
