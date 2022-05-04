import { useMultichain } from "@cryptogate/react-providers";
import { useState, useEffect } from "react";
import Identicon from "../Identicon";
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
  setOpenOptions,
  onSign,
  message = "This is the default message provided by Cryptogate when signing a message",
  btnClass,
  btnText,
  connectMenu,
  networkChainId,
}: {
  setOpenOptions: any;
  onSign?: any;
  message?: string;
  btnClass?: string;
  btnText?: string;
  connectMenu: boolean;
  networkChainId: number;
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { ethereum, network } = useMultichain();
  const { account, library } = ethereum;

  useEffect(() => {
    if (onSign) {
      let key = getWithExpiry(`sig-${account?.toLowerCase()}`);
      if (key) {
        onSign(key);
      } else {
        signingMessage(account, library, message).then((key) => onSign(key));
      }
    }
  }, [account, library]);

  return account ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "15px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            border: "2px solid #fff",
            height: "45px",
            width: "46px",
            paddingLeft: "0.05rem",
            paddingTop: "0.03rem",
          }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Identicon />
        </div>
      </div>
      <ConnectMenu
        onClose={() => {
          setOpenMenu(false);
        }}
        isOpen={connectMenu && openMenu}
      />
    </>
  ) : (
    <button
      className={btnClass}
      type="button"
      onClick={() => {
        console.log("Cryptogate/networkID: ", networkChainId);
        console.log("Cryptogate/chainID: ", network.network.chainId);
        if (networkChainId != -1 && network.network.chainId != networkChainId) {
          alert("Selected network isn't accepted");
        } else {
          setOpenOptions(true);
        }
      }}
    >
      {btnText}
    </button>
  );
};
