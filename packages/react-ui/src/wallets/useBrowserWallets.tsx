import { ethers } from "ethers";
import React, { Dispatch, SetStateAction } from "react";

const useBrowserWallets = () => {
  const [metamask, setMetamask]: [ethers.providers.Web3Provider | undefined, Dispatch<SetStateAction<ethers.providers.Web3Provider | undefined>>] = React.useState();
  const [brave, setBrave]: [ethers.providers.Web3Provider | undefined, Dispatch<SetStateAction<ethers.providers.Web3Provider | undefined>>] = React.useState();
  const [browserProviders, setBrowserProviders] = React.useState(window.ethereum);
  
  React.useEffect(() => {
    setBrowserProviders(window.ethereum);
  }, []);
  React.useEffect(() => {
    if(typeof browserProviders !== "undefined"){
      if (browserProviders.providers?.length > 0) {
        browserProviders.providers.forEach(async (p: any) => {
          if (p.isBraveWallet) {
            setBrave(p)
          }
          if (p.isMetamask) {
            setMetamask(p)
          }
        });
      }
    }
  }, [browserProviders]);
  return { metamask, brave };
};

export default useBrowserWallets;