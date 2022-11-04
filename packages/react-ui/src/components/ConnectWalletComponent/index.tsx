import React from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletList } from "../ConnectWalletList";
import { Identicon } from "../Identicon";
import { useState } from "react";
import { useDapp } from "@cryptogate/react-providers";
import { defaults, Active, Disabled } from "../../defaults";

const { ChainId } = useDapp;

export enum EthWallets {
  ALL = "all",
  METAMASK = "metamask",
  WALLETCONNECT = "walletconnect",
  COINBASE = "coinbase",
  BRAVEWALLET = "braveWallet",
}

export enum SolWallets {
  ALL = "all",
  PHANTOM = "phantom",
  SLOPE = "slope",
  SOLFLARE = "solflare",
}

export enum ConnectedMenuOptions {
  NOMENU = "nomenu",
  WALLETINFORMATION = "walletinformation",
  STORE = "store",
}

export const ConnectWalletComponent = ({
  ActiveComponent = <Active />,
  DisabledComponent = <Disabled />,
  ConnectedComponent = <Identicon />,
  EthWalletList = defaults.EthWallets,
  SolWalletList = defaults.SolWallets,
  SignatureMessage = defaults.SignatureMessage,
  NetworkChainIds = defaults.NetworkChainIds,
  NetworkAlertMessage = defaults.NetworkAlertMessage,
  ConnectedMenuChosen = ConnectedMenuOptions.WALLETINFORMATION,
  Store = {},
  WalletListStyle = defaults.WalletListStyle,
  onSign,
}: {
  ActiveComponent?: React.ReactNode;
  DisabledComponent?: React.ReactNode;
  ConnectedComponent?: React.ReactNode;
  EthWalletList?: EthWallets[];
  SolWalletList?: SolWallets[];
  SignatureMessage?: string;
  NetworkChainIds?: number[];
  NetworkAlertMessage?: string;
  ConnectedMenuChosen?: ConnectedMenuOptions;
  Store?: { Tokens?: string[]; NFTs?: string[] };
  WalletListStyle?: {
    top?: any;
    background?: string;
  };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
    chain: typeof ChainId;
  }) => void;
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <>
      <ConnectWalletButton
        ActiveComponent={ActiveComponent}
        DisabledComponent={DisabledComponent}
        ConnectedComponent={ConnectedComponent}
        NetworkChainIds={NetworkChainIds}
        setOpenOptions={setOpenOptions}
        NetworkAlertMessage={NetworkAlertMessage}
        SignatureMessage={SignatureMessage}
        onSign={onSign}
        ChosenConnectedMenu={ConnectedMenuChosen}
        Store={Store}
      />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          EthWalletList={EthWalletList}
          SolWalletList={SolWalletList}
          WalletListStyle={WalletListStyle}
        />
      ) : (
        <></>
      )}
    </>
  );
};
