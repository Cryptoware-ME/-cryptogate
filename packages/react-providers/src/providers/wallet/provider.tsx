import React from "react";
import { EvmAddress } from "../../models/types";
import { WalletContext } from "./context";

/**
 * Props for the WalletProvider component.
 * Expects a children prop to render.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * The WalletDataType represents the shape of the wallet data.
 * It contains the account address.
 */
export type WalletDataType = {

  account: EvmAddress | undefined;
};

/**
 * A provider component for the WalletContext.
 * It maintains the state of the walletData, which contains the user's account,
 * and sets the initial walletData to undefined.
 * @param Props - Expects a children prop to render.
 */
export function WalletProvider({ children }: Props) {
  /**
   * The state of the walletData, which is an object containing the user's account.
   * The setWalletData function is used to update the walletData state.
   */
  const [walletData, setWalletData]: [
    WalletDataType,
    React.Dispatch<React.SetStateAction<WalletDataType>>
  ] = React.useState({
    account: undefined,
  } as WalletDataType);
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
