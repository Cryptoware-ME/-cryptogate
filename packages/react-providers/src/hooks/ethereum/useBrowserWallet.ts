import React from "react";
import { ethers } from "ethers";

export const useBrowserWallets = () => {
    const [metamask, setMetamask]: [
        ethers.providers.Web3Provider | undefined,
        React.Dispatch<React.SetStateAction<ethers.providers.Web3Provider | undefined>>
    ] = React.useState();
    const [brave, setBrave]: [
        ethers.providers.Web3Provider | undefined,
        React.Dispatch<React.SetStateAction<ethers.providers.Web3Provider | undefined>>
    ] = React.useState();
    const [coinbase, setCoinbase]: [
        ethers.providers.Web3Provider | undefined,
        React.Dispatch<React.SetStateAction<ethers.providers.Web3Provider | undefined>>
    ] = React.useState();
    const [browserProviders, setBrowserProviders] = React.useState<any>();

    React.useEffect(() => {
        setBrowserProviders(window.ethereum)
        if (typeof browserProviders !== "undefined") {
            if (browserProviders.providers?.length > 0) {
                browserProviders.providers.forEach(async (p: any) => {
                    if (p.isMetaMask) {
                        setMetamask(p);
                    }
                    if (p.isBraveWallet) {
                        setBrave(p);
                    }
                    if (p.isWalletLink || p.isCoinbaseWallet) {
                        setCoinbase(p)
                    }
                });
            } else {
                if (browserProviders.isMetaMask) setMetamask(browserProviders);
                if (browserProviders.isBraveWallet) setBrave(browserProviders);
                if (browserProviders.isCoinbase) setCoinbase(browserProviders);
            }
        }
    }, [browserProviders]);

    return { metamask, brave, coinbase };
};
