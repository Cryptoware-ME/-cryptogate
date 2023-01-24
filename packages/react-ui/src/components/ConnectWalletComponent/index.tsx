import React from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletList } from "../ConnectWalletList";
import { Identicon } from "../Identicon";
import { ChainId } from "@cryptogate/react-providers";
import { defaults, Active, Disabled } from "../../defaults";

/**
 * Enum representing different Ethereum wallets.
 */
export enum EthWallets {
  ALL = "all",
  METAMASK = "metamask",
  WALLETCONNECT = "walletconnect",
  COINBASE = "coinbase",
  BRAVEWALLET = "braveWallet",
}

/**
 * Enum representing different options for the connected menu.
 */
export enum ConnectedMenuOptions {
  NOMENU = "nomenu",
  WALLETINFORMATION = "walletinformation",
  STORE = "store",
}

/**
 * ConnectWalletComponent is a React component that renders the Connect Wallet button.
 * It can display different components based on the user's wallet connection status (Active, Disabled, Connected).
 * It also allows users to connect to different Ethereum wallets and can display a store to interact with ERC20/NFT tokens. 
 */
export const ConnectWalletComponent = ({
  ActiveComponent = <Active />,
  DisabledComponent = <Disabled />,
  ConnectedComponent = <Identicon />,
  EthWalletList = [EthWallets.ALL],
  SignatureMessage = defaults.SignatureMessage,
  NetworkChainIds = defaults.NetworkChainIds,
  NetworkAlertMessage = defaults.NetworkAlertMessage,
  ConnectedMenuChosen = ConnectedMenuOptions.WALLETINFORMATION,
  Store = {},
  onSign,
}: {
  ActiveComponent?: React.ReactNode;
  DisabledComponent?: React.ReactNode;
  ConnectedComponent?: React.ReactNode;
  EthWalletList?: EthWallets[];
  SignatureMessage?: string;
  NetworkChainIds?: number[];
  NetworkAlertMessage?: string;
  ConnectedMenuChosen?: ConnectedMenuOptions;
  Store?: { Tokens?: string[]; NFTs?: string[] };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
    chain: typeof ChainId;
  }) => void;
}) => {
  const [openOptions, setOpenOptions] = React.useState(false);

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
        />
      ) : (
        <></>
      )}
    </>
  );
};
