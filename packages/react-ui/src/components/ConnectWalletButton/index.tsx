import React from "react";
import {
  useEthereum,
  useConfig,
  SolAddress,
  EvmAddress,
  useSolana,
  useSui,
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
    console.log("Signing...");
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
        console.log("Error: ", e);
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

const signingSuiMessage = async (
  fn: any,
  address: string,
  SignatureMessage: string,
  LocalStorage: boolean
) => {
  return new Promise((resolve, reject) => {
    const message = new TextEncoder().encode(SignatureMessage);
    fn({ message })
      .then((result: any) => {
        const sigObj = {
          message: new TextDecoder().decode(message),
          signature: result.messageBytes + "." + result.signature,
          address: address.toString(),
        };
        LocalStorage &&
          setWithExpiry(`sig-${address.toString()}`, sigObj, 43200000);
        resolve(sigObj);
      })
      .catch((e: any) => {
        reject(e);
      });
  });
};

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

  const prevAccount = React.useRef("");

  const { ethConfig, solConfig, suiConfig } = useConfig();
  const { account, network, provider, deactivate } = useEthereum();
  const {
    publicKey,
    connected: solConnected,
    wallet: { signMessage: signSolMessage },
  } = useSolana();
  const {
    address,
    connected: suiConnected,
    signMessage: signSuiMessage,
  } = useSui();

  React.useEffect(() => {
    if (ethConfig && account && provider && account != prevAccount.current) {
      prevAccount.current = account;
      console.log("Account 1: ", account);
      console.log("Provider 1: ", provider);
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
            console.log("Else");
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
    if (solConfig && publicKey && solConnected) {
      if (onSign) {
        let key = getWithExpiry(`sig-${publicKey.toString()}`);
        if (key) {
          setKeyValue(key);
          onSign(key);
        } else {
          signingSolMessage(
            signSolMessage,
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
  }, [solConfig, publicKey, solConnected]);

  React.useEffect(() => {
    if (suiConfig && address && suiConnected) {
      if (onSign) {
        let key = getWithExpiry(`sig-${address.toString()}`);
        if (key) {
          setKeyValue(key);
          onSign(key);
        } else {
          signingSuiMessage(
            signSuiMessage,
            address,
            `${SignatureMessage.msg.trim()}${
              SignatureMessage.address ? address.toString().toLowerCase() : ""
            }${SignatureMessage.timestamp ? "ts-" + Date.now() : ""}`.trim(),
            LocalStorage
          ).then((key) => {
            setKeyValue(key as any);
            onSign(key as any);
          });
        }
      } else {
        setKeyValue({ address: address });
      }
    }
  }, [suiConfig, address, suiConnected]);

  return (account && provider) ||
    (address && suiConnected) ||
    (publicKey && solConnected) ? (
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
