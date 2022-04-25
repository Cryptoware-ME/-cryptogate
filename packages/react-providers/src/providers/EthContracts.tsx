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
    if (network.chainId && contracts && contracts.length > 0) {
      contracts.forEach(c => {
        if (c.name && c.address && c.abi) {
          const interfaceABI = new Interface(c.abi);
          ethContracts[c.name] = {
            address: network.chainId ? c.address[network.chainId] : '',
            interface: interfaceABI,
            contract: new Contract(
              network.chainId ? c.address[network.chainId] : '',
              interfaceABI,
            )
          }
        }
      });
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