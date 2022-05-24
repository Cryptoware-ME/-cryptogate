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
}

export enum SolWallets {
  ALL = "all",
  PHANTOM = "phantom",
  SLOPE = "slope",
  SOLFLARE = "solflare",
}

export const ConnectWalletComponent = ({
  ActiveComponent = <Active />,
  DiabledComponent = <Disabled />,
  ConnectedComponent = <Identicon />,
  EthWalletList = defaults.EthWallets,
  SolWalletList = defaults.SolWallets,
  SignatureMessage = defaults.SignatureMessage,
  NetworkChainIds = defaults.NetworkChainIds,
  NetworkAlertMessage = defaults.NetworkAlertMessage,
  ConnectedMenu = defaults.ConnectedMenu,
  WalletListStyle = defaults.WalletListStyle,
  onSign,
}: {
  ActiveComponent?: React.ReactNode;
  DiabledComponent?: React.ReactNode;
  ConnectedComponent?: React.ReactNode;
  EthWalletList?: EthWallets[];
  SolWalletList?: SolWallets[];
  SignatureMessage?: string;
  NetworkChainIds?: number[];
  NetworkAlertMessage?: string;
  ConnectedMenu?: boolean;
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
        DiabledComponent={DiabledComponent}
        ConnectedComponent={ConnectedComponent}
        NetworkChainIds={NetworkChainIds}
        setOpenOptions={setOpenOptions}
        NetworkAlertMessage={NetworkAlertMessage}
        SignatureMessage={SignatureMessage}
        onSign={onSign}
        ConnectMenuFlag={ConnectedMenu}
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
