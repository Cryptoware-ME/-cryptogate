import React from "react";
import {
  ChainId,
  useEthereum,
  useConfig,
  getChainById,
} from "@cryptogate/react-providers";
import { ConnectedMenu } from "../ConnectMenu";
import { ethSignMessage } from "@cryptogate/core";
import { setWithExpiry } from "../../localStorage/setWithExpire";
import { getWithExpiry } from "../../localStorage/getWithExpire";
import { ConnectedMenuOptions } from "../ConnectWalletComponent";


/**

signingMessage is a function that signs a message using the ethSignMessage function from the @cryptogate/core library.
It also stores and retrieves the signature using the setWithExpiry and getWithExpiry functions from the localStorage library.
@param {string} account - The account address to be used for signing the message.
@param {any} provider - The provider to be used for signing the message.
@param {string} SignatureMessage - The message to be signed.
*/

const signingMessage = async (
  account: any,
  provider: any,
  SignatureMessage: string
) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      provider: provider,
      message: SignatureMessage + "Wallet Address: " + account,
    })
      .then((sig) => {
        setWithExpiry(`sig-${account.toLowerCase()}`, sig, 43200000);
        resolve(getWithExpiry(`sig-${account.toLowerCase()}`));
      })
      .catch((e) => {
        reject(e);
      });
  });
};

/**
 * ConnectWalletButton is a functional component that allows for connecting to a wallet and signing a message.
 * It uses the useEthereum and useConfig hooks from the @cryptogate/react-providers library to handle the connection and network checking.
 * @param ActiveComponent - The component to be displayed when the wallet is not connected.
 * @param DisabledComponent - The component to be displayed when the wallet is connected but signing is disabled.
 * @param ConnectedComponent - The component to be displayed when the wallet is connected and signing is enabled.
 * @param SignatureMessage - The message to be signed by the connected wallet.
 * @param NetworkChainIds - An array of chainIds that are allowed for the wallet connection.
 * @param NetworkAlertMessage - The alert message to be displayed when the connected network is not allowed.
 * @param ChosenConnectedMenu - The options to be passed to the ConnectedMenu component.
 * @param Store An object containing data to be passed to the ConnectedMenu component.
 * @param onSign A function to be called when the signature is obtained.
 * @param  setOpenOptions - A function to open the options for connecting to the wallet
 * @returns 
 */

export const ConnectWalletButton = ({
  ActiveComponent,
  DisabledComponent,
  ConnectedComponent,
  SignatureMessage,
  NetworkChainIds,
  NetworkAlertMessage,
  ChosenConnectedMenu,
  onSign,
  Store,
  setOpenOptions,
}: {
  ActiveComponent: React.ReactNode;
  DisabledComponent: React.ReactNode;
  ConnectedComponent: React.ReactNode;
  SignatureMessage: string;
  NetworkChainIds: number[];
  NetworkAlertMessage: string;
  ChosenConnectedMenu: ConnectedMenuOptions;
  Store: { Tokens?: string[]; NFTs?: string[] };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
    chain: typeof ChainId;
  }) => void;
  setOpenOptions: any;
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [keyValue, setKeyValue] = React.useState(null as unknown as object);

  const { account, network, provider, deactivate } = useEthereum();
  const { ethConfig } = useConfig();

  React.useEffect(() => {
    if (account && provider) {
      if (
        ethConfig.allowedNetworks &&
        ethConfig.allowedNetworks.length &&
        ethConfig.allowedNetworks.filter(
          (chain) => chain?.chainId == network.chainId
        ).length
      ) {
        if (onSign) {
          let key = getWithExpiry(`sig-${account?.toLowerCase()}`);
          if (key) {
            setKeyValue(key);
            onSign(key);
          } else {
            signingMessage(account, provider, SignatureMessage).then((key) => {
              setKeyValue(key as any);
              onSign(key as any);
            });
          }
        } else {
          setKeyValue({ address: account });
        }
      } else {
        alert(NetworkAlertMessage);
        deactivate();
      }
    }
  }, [account, provider]);

  return account ? (
    <>
      {keyValue ? (
        <div onClick={() => setOpenMenu(!openMenu)}>{ConnectedComponent}</div>
      ) : (
        <>{DisabledComponent}</>
      )}
      <ConnectedMenu
        ChosenConnectedMenu={ChosenConnectedMenu}
        Store={Store}
        onClose={() => {
          setOpenMenu(false);
        }}
        isOpen={openMenu}
      />
    </>
  ) : (
    <div
      onClick={() => {
        setOpenOptions(true);
      }}
    >
      {ActiveComponent}
    </div>
  );
};
