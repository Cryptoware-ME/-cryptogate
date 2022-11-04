import React from "react";
import { EthNodeContext } from "./context";
import { NodeUrls } from "../../models/types";
import { providers } from "ethers";

interface Props {
  children: React.ReactNode;
  readOnlyUrls: NodeUrls;
}

// TODO: Change Name To EVM Node
// TODO: Get Connected Network
const network = { chainName: "goerli", chainId: 5 };

export function EthNodeProvider({ children, readOnlyUrls }: Props) {
  const [provider, setProvider] = React.useState<
    providers.JsonRpcProvider | providers.BaseProvider
  >();

  React.useEffect(() => {
    let _provider = new providers.JsonRpcProvider(
      readOnlyUrls[network.chainId]
    );
    setProvider(_provider);
  }, []);

  return <EthNodeContext.Provider value={provider} children={children} />;
}
