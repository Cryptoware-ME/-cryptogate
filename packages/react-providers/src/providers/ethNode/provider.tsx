import React from "react";
import { useConfig } from "../config";
import { EthNodeContext } from "./context";
const ethers = require("ethers");

interface Props {
  children: React.ReactNode;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!
const network = { chainName: "goerli", chainId: 5 };
//!!!!!!!!!!!!!!!!!!!!!!!!!!

export function EthNodeProvider({ children }: Props) {
  const { ethConfig } = useConfig();
  const [provider, setProvider] = React.useState<
    | typeof ethers.providers.JsonRpcProvider
    | typeof ethers.providers.BaseProvider
  >();

  React.useEffect(() => {
    if (ethConfig && ethConfig.readOnlyUrls) {
      let keys = ethConfig.readOnlyUrls[network.chainId];
      if (keys.other) {
        let _provider = new ethers.providers.JsonRpcProvider(keys.other);
        setProvider(_provider);
      } else {
        let _provider = ethers.getDefaultProvider(network.chainName, keys);
        setProvider(_provider);
      }
    }
  }, [ethConfig]);

  return <EthNodeContext.Provider value={provider} children={children} />;
}
