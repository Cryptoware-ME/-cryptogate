import React from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletList } from "../ConnectWalletList";
import { Identicon } from "../Identicon";
import { useState } from "react";
import { useDapp } from "@cryptogate/react-providers";
import { defaults, Active } from "../../defaults";

//TODO: Wallet List Style
//TODO: Use Disabled Component

const { ChainId } = useDapp;

export enum EthWallets {
  ALL = "all",
  METAMASK = "metamask",
  WALLETCONNECT = "walletconnect",
  COINBASE = "coinbase",
}

export enum SolWallets {
  ALL = "all",
  PHANTOM = "phantom",
  SLOPE = "slope",
  SOLFLARE = "solflare",
}

export const ConnectWalletComponent = ({
  ActiveComponent = <Active />,
  ConnectedComponent = <Identicon />,
  EthWalletList = defaults.EthWallets,
  SolWalletList = defaults.SolWallets,
  SignatureMessage = defaults.SignatureMessage,
  NetworkChainIds = defaults.NetworkChainIds,
  NetworkAlertMessage = defaults.NetworkAlertMessage,
  ConnectMenu = defaults.ConnectMenu,
  onSign,
  WalletListStyle,
  diabledComponent,
}: {
  ActiveComponent?: React.ReactNode;
  ConnectedComponent?: React.ReactNode;
  EthWalletList?: EthWallets[];
  SolWalletList?: SolWallets[];
  SignatureMessage?: string;
  NetworkChainIds?: number[];
  NetworkAlertMessage?: string;
  ConnectMenu?: boolean;
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
    chain: typeof ChainId;
  }) => void;
  WalletListStyle?: {
    top?: any;
    background?: string;
  };
  diabledComponent?: React.ReactNode;
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <ConnectWalletButton
        ActiveComponent={ActiveComponent}
        ConnectedComponent={ConnectedComponent}
        NetworkChainIds={NetworkChainIds}
        diabledComponent={diabledComponent}
        setOpenOptions={setOpenOptions}
        NetworkAlertMessage={NetworkAlertMessage}
        SignatureMessage={SignatureMessage}
        onSign={onSign}
        ConnectMenuFlag={ConnectMenu}
      />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          EthWalletList={EthWalletList}
          SolWalletList={SolWalletList}
          WalletListStyle={{
            background: WalletListStyle?.background
              ? WalletListStyle.background
              : "white",
            top: WalletListStyle?.top ? WalletListStyle.top : "0",
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};
