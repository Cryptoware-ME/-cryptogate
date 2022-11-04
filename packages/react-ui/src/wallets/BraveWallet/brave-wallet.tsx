import { NextPage } from "next";
import { ethers } from "ethers";
import Image from "next/image";
import useBrowserWallets from "../useBrowserWallets";
import { useCallback } from "react";

const BraveWallet = () => {
  const { brave } = useBrowserWallets();
  // const {addErrors} = useErrorsBag();

  // var connectBraveWallet = useCallback(() => brave && brave.send("eth_requestAccounts", []).catch(addErrors), [brave, addErrors]);
  var connectBraveWallet = useCallback(() => brave && brave.send("eth_requestAccounts", []).catch(console.log), [brave]);

  return (
    <Image
      // loader={myLoader}
      src="/imgs/brave-wallet.png"
      alt="Picture of the author"
      width={50}
      height={50} 
      onClick={connectBraveWallet}
    />
  );
};

export default BraveWallet;
