import React, { useEffect, useState } from "react";
import { useNetwork } from "@usedapp/core";
import { Contract, utils } from "ethers";

export const EthContractsContext = React.createContext({});

export const EthContractsContextProvider = ({ config, children }) => {

  const { network } = useNetwork();
  const [Contracts, setContracts] = useState({});

  useEffect(() => {
    if (network.chainId && config.contracts) {
      let contracts = {};
      config.contracts.forEach(c => {
        if (c.name && c.address && c.abi) {
          const iabi = new utils.Interface(c.abi);
          contracts[c.name] = {
            address: c.address[network.chainId] || '',
            interface: iabi,
            contract: new Contract(
              c.address[network.chainId] || '',
              iabi,
              null
            )
          }
        }
      });
      if (contracts !== {}) {
        setContracts(contracts);
      }
    }
  }, [network, config]);

  return (
    <EthContractsContext.Provider value={{ Contracts }}>
      {children}
    </EthContractsContext.Provider>
  );
};