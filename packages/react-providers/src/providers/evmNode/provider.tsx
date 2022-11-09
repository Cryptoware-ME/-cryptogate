import React from "react";
import { EvmNodeContext } from "./context";
import { NodeUrls } from "../../models/types";
import { providers } from "ethers";
import { useNetwork } from "../network";

type Props = {
  children: React.ReactNode;
  readOnlyUrls: NodeUrls;
};

// TODO: Get Wallet Provider If Connected
export function EvmNodeProvider({ children, readOnlyUrls }: Props) {
  const [provider, setProvider]: [
    providers.JsonRpcProvider | providers.BaseProvider | undefined,
    React.Dispatch<
      React.SetStateAction<
        providers.JsonRpcProvider | providers.BaseProvider | undefined
      >
    >
  ] = React.useState();
  const { networkData } = useNetwork();

  React.useEffect(() => {
    let _provider = new providers.JsonRpcProvider(
      readOnlyUrls[networkData.chainId]
    );
    setProvider(_provider);
  }, [networkData]);

  return <EvmNodeContext.Provider value={provider} children={children} />;
}
