import * as ethers from "ethers";
/**
 * @internal INTENDED FOR INTERNAL USE ONLY. USE AT YOUR OWN
 * @return Providers (if available) for metamask, brave wallet and coinbase
 * @example
 *  const {metamask, brave, coinbase} = useBrowserWallets()
*/
export declare const useBrowserWallets: () => {
    metamask: ethers.ethers.providers.Web3Provider | undefined;
    brave: ethers.ethers.providers.Web3Provider | undefined;
    coinbase: ethers.ethers.providers.Web3Provider | undefined;
};
