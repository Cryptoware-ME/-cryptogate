import React from "react";
import {
  useEthereum,
  useConfig,
  SolAddress,
  EvmAddress,
  useSolana,
} from "@cryptogate/react-providers";
import { ConnectedMenu } from "../ConnectMenu";
import { ethSignMessage } from "@cryptogate/core";
import { setWithExpiry } from "../../localStorage/setWithExpire";
import { getWithExpiry } from "../../localStorage/getWithExpire";
import { ConnectedMenuOptions } from "../ConnectWalletComponent";

const signingEvmMessage = async (
  account: EvmAddress,
  provider: any,
  SignatureMessage: string,
  LocalStorage: boolean
) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      provider: provider,
      message: SignatureMessage,
    })
      .then((sig) => {
        LocalStorage &&
          setWithExpiry(`sig-${account.toLowerCase()}`, sig, 43200000);
        resolve(sig);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const signingSolMessage = async (
  fn: any,
  pubK: SolAddress,
  SignatureMessage: string,
  LocalStorage: boolean
) => {
  return new Promise((resolve, reject) => {
    const message = new TextEncoder().encode(SignatureMessage);
    fn(message)
      .then((sig: any) => {
        const sigObj = {
          message: new TextDecoder().decode(message),
          signature: JSON.stringify(sig),
          address: pubK.toString(),
        };
        LocalStorage &&
          setWithExpiry(`sig-${pubK.toString()}`, sigObj, 43200000);
        resolve(sigObj);
      })
      .catch((e: any) => {
        reject(e);
      });
  });
};
/**

ConnectWalletButton component for handling wallet connection and signing messages.
@component
@param {Object} props - The component props.
@param {React.ReactNode} props.ActiveComponent - The component to render when the wallet is not connected.
@param {React.ReactNode} props.DisabledComponent - The component to render when the wallet is connected but signing is disabled.
@param {React.ReactNode} props.ConnectedComponent - The component to render when the wallet is connected and signing is enabled.
@param {object} props.SignatureMessage - The message to sign.
@param {string} props.SignatureMessage.msg - The main message to sign.
@param {boolean} props.SignatureMessage.address - A boolean indicating whether to include the wallet address in the message.
@param {boolean} props.SignatureMessage.timestamp - A boolean indicating whether to include the timestamp in the message.
@param {string} props.NetworkAlertMessage - The message to display when the network is not allowed.
@param {ConnectedMenuOptions} props.ChosenConnectedMenu - The chosen menu option for the connected menu.
@param {function} props.onSign - The function to handle the signed message.
@param {object} props.Store - The store object containing tokens and NFTs.
@param {string[]} [props.Store.Tokens] - The list of tokens in the store.
@param {string[]} [props.Store.NFTs] - The list of NFTs in the store.
@param {boolean} props.LocalStorage - A boolean indicating whether to use local storage for caching signatures.
@param {function} props.setOpenOptions - The function to open wallet connection options.
@returns {JSX.Element} The rendered component.
@example
<ConnectWalletButton
ActiveComponent={<button>Connect Wallet</button>}
DisabledComponent={<button disabled>Connected</button>}
ConnectedComponent={<button>Connected</button>}
SignatureMessage={{ msg: "Sign this message", address: true, timestamp: true }}
NetworkAlertMessage="Invalid network"
ChosenConnectedMenu={ConnectedMenuOptions.WALLETINFORMATION}
onSign={handleSign}
Store={{ Tokens: ["Token1", "Token2"], NFTs: ["NFT1", "NFT2"] }}
LocalStorage={true}
setOpenOptions={handleOpenOptions}
/>
*/
export const ConnectWalletButton = ({
  ActiveComponent,
  DisabledComponent,
  ConnectedComponent,
  SignatureMessage,
  NetworkAlertMessage,
  ChosenConnectedMenu,
  onSign,
  Store,
  setOpenOptions,
  LocalStorage,
}: {
  ActiveComponent: React.ReactNode;
  DisabledComponent: React.ReactNode;
  ConnectedComponent: React.ReactNode;
  SignatureMessage: { msg: string; address: boolean; timestamp: boolean };
  NetworkAlertMessage: string;
  ChosenConnectedMenu: ConnectedMenuOptions;
  Store: { Tokens?: string[]; NFTs?: string[] };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
  }) => void;
  LocalStorage: boolean;
  setOpenOptions: any;
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [keyValue, setKeyValue] = React.useState(null as unknown as object);

  const { account, network, provider, deactivate } = useEthereum();
  const { publicKey, connected, wallet } = useSolana();
  const { ethConfig } = useConfig();

  React.useEffect(() => {
    if (ethConfig && account && provider) {
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
            signingEvmMessage(
              account,
              provider,
              `${SignatureMessage.msg.trim()}${
                SignatureMessage.address ? account.toString().toLowerCase() : ""
              }${SignatureMessage.timestamp ? "ts-" + Date.now() : ""}`.trim(),
              LocalStorage
            ).then((key) => {
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
  }, [ethConfig, account, provider]);

  React.useEffect(() => {
    if (publicKey && connected) {
      if (onSign) {
        let key = getWithExpiry(`sig-${publicKey.toString()}`);
        if (key) {
          setKeyValue(key);
          onSign(key);
        } else {
          signingSolMessage(
            wallet.signMessage,
            publicKey as SolAddress,
            `${SignatureMessage.msg.trim()}${
              SignatureMessage.address ? publicKey.toString().toLowerCase() : ""
            }${SignatureMessage.timestamp ? "ts-" + Date.now() : ""}`.trim(),
            LocalStorage
          ).then((key) => {
            setKeyValue(key as any);
            onSign(key as any);
          });
        }
      } else {
        setKeyValue({ address: account });
      }
    }
  }, [publicKey, connected]);

  return account || (publicKey && connected) ? (
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
