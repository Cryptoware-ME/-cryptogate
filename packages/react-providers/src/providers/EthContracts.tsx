import React, { ReactNode, useEffect, useState } from "react";
import { useNetwork } from "@usedapp/core";
import { Contract } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';

export interface EthContractConfig {
  name: string, 
  address: {
    [chain: number]: string
  }, 
  abi: any
}

export interface EthContracts {
  [name: string]:{
    address?: string, 
    interface?: Interface,
    contract?: Contract
  }
}

export interface EthContractsContextProviderProps {
  children?: ReactNode;
  contracts: EthContractConfig[]
}

export const EthContractsContext = React.createContext({} as EthContracts);

export const EthContractsContextProvider = ({ contracts, children }: EthContractsContextProviderProps) => {

  const { network } = useNetwork();
  const [Contracts, setContracts] = useState({} as EthContracts);

  useEffect(() => {
    let ethContracts: EthContracts = {};

    if (network.chainId && contracts && Object.keys(contracts).length > 0) {
      Object.keys(contracts).forEach(c => {
        if (contracts[c].name && contracts[c].address && contracts[c].abi) {
          const interfaceABI = new Interface(contracts[c].abi);
          ethContracts[contracts[c].name] = {
            address: network.chainId ? contracts[c].address[network.chainId] : '',
            interface: interfaceABI,
            contract: new Contract(
              network.chainId ? contracts[c].address[network.chainId] : '',
              interfaceABI,
            )
          }
        }
      });
      console.log('eth contracts', ethContracts);
      if (ethContracts && ethContracts !== {} && ethContracts !== null) {
        setContracts(ethContracts);
      }
    }
  }, [network, contracts]);

  return (
    <EthContractsContext.Provider value={{ ...Contracts }}>
      {children}
    </EthContractsContext.Provider>
  );
};