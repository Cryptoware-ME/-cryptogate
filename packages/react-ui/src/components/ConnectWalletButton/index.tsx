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
  SignatureMessage: string
) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      provider: provider,
      message:
        SignatureMessage +
        "Wallet Address: " +
        account.toString() +
        " ts-" +
        Date.now(),
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

const signingSolMessage = async (
  fn: any,
  pubK: SolAddress,
  SignatureMessage: string
) => {
  return new Promise((resolve, reject) => {
    const message = new TextEncoder().encode(
      SignatureMessage +
        "Wallet Address: " +
        pubK.toString() +
        " ts-" +
        Date.now()
    );
    fn(message)
      .then((sig: any) => {
        const sigObj = {
          message: new TextDecoder().decode(message),
          signature: JSON.stringify(sig),
          address: pubK.toString(),
        };
        setWithExpiry(`sig-${pubK.toString()}`, sigObj, 43200000);
        resolve(getWithExpiry(`sig-${pubK.toString()}`));
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
}: {
  ActiveComponent: React.ReactNode;
  DisabledComponent: React.ReactNode;
  ConnectedComponent: React.ReactNode;
  SignatureMessage: string;
  NetworkAlertMessage: string;
  ChosenConnectedMenu: ConnectedMenuOptions;
  Store: { Tokens?: string[]; NFTs?: string[] };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
  }) => void;
  setOpenOptions: any;
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [keyValue, setKeyValue] = React.useState(null as unknown as object);

  const { account, network, provider, deactivate } = useEthereum();
  const { publicKey, connected, signMessage } = useSolana();
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
            signingEvmMessage(account, provider, SignatureMessage).then(
              (key) => {
                setKeyValue(key as any);
                onSign(key as any);
              }
            );
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

  React.useEffect(() => {
    if (publicKey && connected) {
      if (onSign) {
        let key = getWithExpiry(`sig-${publicKey.toString()}`);
        if (key) {
          setKeyValue(key);
          onSign(key);
        } else {
          signingSolMessage(signMessage, publicKey, SignatureMessage).then(
            (key) => {
              setKeyValue(key as any);
              onSign(key as any);
            }
          );
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
