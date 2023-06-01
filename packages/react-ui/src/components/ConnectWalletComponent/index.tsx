import React from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletList } from "../ConnectWalletList";
import { Identicon } from "../Identicon";
import { defaults, Active, Disabled } from "../../defaults";

export enum ConnectedMenuOptions {
  NOMENU = "nomenu",
  WALLETINFORMATION = "walletinformation",
  STORE = "store",
}

/**

ConnectWalletComponent is a React component that provides a user interface for connecting a wallet.
@param {Object} props - The component props.
@param {React.ReactNode} [props.ActiveComponent] - The component to render when the wallet is active.
@param {React.ReactNode} [props.DisabledComponent] - The component to render when the wallet is disabled.
@param {React.ReactNode} [props.ConnectedComponent] - The component to render when the wallet is connected.
@param {Object} [props.SignatureMessage] - The message to display when requesting a signature.
@param {string} [props.SignatureMessage.msg] - The text message to display.
@param {boolean} [props.SignatureMessage.address] - A boolean indicating if the wallet address should be included in the message.
@param {boolean} [props.SignatureMessage.timestamp] - A boolean indicating if the current timestamp should be included in the message.
@param {string} [props.NetworkAlertMessage] - The message to display when the network is not supported.
@param {ConnectedMenuOptions} [props.ConnectedMenuChosen] - The chosen menu option for the connected wallet.
@param {Object} [props.Store] - The store object containing token and NFT information.
@param {string[]} [props.Store.Tokens] - An array of token identifiers.
@param {string[]} [props.Store.NFTs] - An array of NFT identifiers.
@param {(key: { address: string, message: string, signature: string }) => void} [props.onSign] - The callback function triggered when a signature is requested.
@param {boolean} [props.LocalStorage] - A boolean indicating if local storage should be used.
@returns {React.ReactNode} The rendered ConnectWalletComponent.
*/
export const ConnectWalletComponent = ({
  ActiveComponent = <Active />,
  DisabledComponent = <Disabled />,
  ConnectedComponent = <Identicon />,
  SignatureMessage = defaults.SignatureMessage,
  NetworkAlertMessage = defaults.NetworkAlertMessage,
  ConnectedMenuChosen = ConnectedMenuOptions.WALLETINFORMATION,
  Store = {},
  onSign,
  LocalStorage = defaults.LocalStorage,
}: {
  ActiveComponent?: React.ReactNode;
  DisabledComponent?: React.ReactNode;
  ConnectedComponent?: React.ReactNode;
  SignatureMessage?: { msg: string; address: boolean; timestamp: boolean };
  NetworkAlertMessage?: string;
  ConnectedMenuChosen?: ConnectedMenuOptions;
  Store?: { Tokens?: string[]; NFTs?: string[] };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
  }) => void;
  LocalStorage?: boolean;
}) => {
  const [openOptions, setOpenOptions] = React.useState(false);

  return (
    <>
      <ConnectWalletButton
        ActiveComponent={ActiveComponent}
        DisabledComponent={DisabledComponent}
        ConnectedComponent={ConnectedComponent}
        setOpenOptions={setOpenOptions}
        NetworkAlertMessage={NetworkAlertMessage}
        SignatureMessage={SignatureMessage}
        onSign={onSign}
        ChosenConnectedMenu={ConnectedMenuChosen}
        Store={Store}
        LocalStorage={LocalStorage}
      />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
        />
      ) : (
        <></>
      )}
    </>
  );
};
