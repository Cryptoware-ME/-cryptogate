import { NextPage } from "next";
import { ethers } from "ethers";
import Image from "next/image";
import { useState } from "react";

const MetaMask: NextPage = () => {
  let provider: any = null;
  const [show, setShow] = useState(false);
  var connectMetaMask = async () => {
    debugger;
    if (typeof window.ethereum !== "undefined") {
      if (window.ethereum.providers?.length) {
        window.ethereum.providers.forEach(async (p: any) => {
          debugger;
          if (p.isMetaMask) {
            provider = p;
            new ethers.providers.Web3Provider(provider);
          }
        });
      }
      try {
        await provider.send("eth_requestAccounts", []);
        const balance = await provider.getBalance("ethers.eth");
        console.log(ethers.utils.formatEther(balance));
      } catch (error: any) {
        alert(error["message"]);
        return;
      }
    } else {
      setShow(true);
    }
  };

  var Meta = () => {
    return (
      <div>
        {show && (
          <p>MetaMask is not installed. Please install MetaMask to continue.</p>
        )}
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
