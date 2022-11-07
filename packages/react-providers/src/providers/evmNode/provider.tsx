import React from "react";
import { EvmNodeContext } from "./context";
import { NodeUrls } from "../../models/types";
import ethers, { providers } from "ethers";

interface Props {
  children: React.ReactNode;
  readOnlyUrls: NodeUrls;
}

// TODO: Get Connected Network
// TODO: Get Wallet Provider If Connected
const network = { chainName: "goerli", chainId: 5 };

export function EvmNodeProvider({ children, readOnlyUrls }: Props) {
  const [provider, setProvider]: [
    providers.JsonRpcProvider | providers.BaseProvider | undefined,
    React.Dispatch<
      React.SetStateAction<
        providers.JsonRpcProvider | providers.BaseProvider | undefined
      >
    >
  ] = React.useState();

  React.useEffect(() => {
    let _provider = new providers.JsonRpcProvider(
      readOnlyUrls[network.chainId]
    );
    setProvider(_provider);
  }, []);

  return <EvmNodeContext.Provider value={provider} children={children} />;
}
