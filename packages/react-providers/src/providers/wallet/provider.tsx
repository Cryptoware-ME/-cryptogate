import React from "react";
import { ChainId } from "../../constants/chains";
import { EvmAddress } from "../../models/types";
import { WalletContext } from "./context";

type Props = {
  children: React.ReactNode;
};

export interface WalletDataInterface {
  account: EvmAddress | undefined;
}

export function WalletProvider({ children }: Props) {
  const [walletData, setWalletData]: [
    WalletDataInterface,
    React.Dispatch<React.SetStateAction<WalletDataInterface>>
  ] = React.useState({
    account: undefined,
  } as WalletDataInterface);

  return (
    <WalletContext.Provider
      value={{
        walletData,
        setWalletData,
      }}
      children={children}
    />
  );
}
