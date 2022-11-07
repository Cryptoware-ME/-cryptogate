import { NextPage } from "next";
import { ethers } from "ethers";
import Image from "next/image";
import { useCallback, useState } from "react";
import useBrowserWallets from "../useBrowserWallets";

const MetaMask: NextPage = () => {

  const { metamask } = useBrowserWallets();
  // const {addErrors} = useErrorsBag();
  // var connectBraveWallet = useCallback(() => brave && brave.send("eth_requestAccounts", []).catch(addErrors), [brave, addErrors]);
  var connectMetaMask = useCallback(() => metamask && metamask.send("eth_requestAccounts", []).catch(console.log), [metamask]);
  var Meta = () => {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  };
  return (
    <>
      {/* <div className="column">
        <div className="row"> */}
          <Image
            // loader={myLoader}
            src="/imgs/meta-mask.png"
            alt="Picture of the author"
            width={50}
            height={50}
            onClick={connectMetaMask}
          />

      <Meta />
    </>
  );
};
export default MetaMask;
