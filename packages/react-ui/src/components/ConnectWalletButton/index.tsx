import React from "react";
import { useMultichain } from "@cryptogate/react-providers";
import { useState, useEffect } from "react";
import { Identicon } from "../Identicon";
import ConnectMenu from "../ConnectMenu";
import { ethSignMessage } from "@cryptogate/core";
import { setWithExpiry } from "../../localStorage/setWithExpire";
import { getWithExpiry } from "../../localStorage/getWithExpire";

const signingMessage = async (account: any, library: any, message: string) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      provider: library,
      message,
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

export const ConnectWalletButton = ({
  activeComponent,
  diabledComponent,
  connectedComponent,
  setOpenOptions,
  onSign,
  message = "This is the default message provided by Cryptogate when signing a message",
  btnClass,
  btnText,
  connectMenu,
  networkChainId = [],
}: {
  activeComponent?: React.ReactNode;
  diabledComponent?: React.ReactNode;
  connectedComponent?: React.ReactNode;
  setOpenOptions: any;
  onSign?: any;
  message?: string;
  btnClass?: string;
  btnText?: string;
  connectMenu: boolean;
  networkChainId?: number[];
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { ethereum, network } = useMultichain();
  const { account, library, deactivate } = ethereum;

  useEffect(() => {
    if (account && library) {
      if (
        networkChainId.length == 0 ||
        (networkChainId.length > 0 &&
          (network.network.chainId
            ? networkChainId.includes(network.network.chainId)
            : false))
      ) {
        if (onSign) {
          let key = getWithExpiry(`sig-${account?.toLowerCase()}`);
          if (key) {
            onSign(key);
          } else {
            signingMessage(account, library, message).then((key) =>
              onSign(key)
            );
          }
        }
      } else {
        alert("Selected network isn't accepted");
        deactivate();
      }
    }
  }, [account, library]);

  return account ? (
    <>
      <div onClick={() => setOpenMenu(!openMenu)}>
        {connectedComponent ? connectedComponent : <Identicon />}
      </div>
      <ConnectMenu
        onClose={() => {
          setOpenMenu(false);
        }}
        isOpen={connectMenu && openMenu}
      />
    </>
  ) : (
    <div
      onClick={() => {
        setOpenOptions(true);
      }}
    >
      {activeComponent ? (
        activeComponent
      ) : (
        <button className={btnClass} type="button">
          {btnText}
        </button>
      )}
    </div>
  );
};
