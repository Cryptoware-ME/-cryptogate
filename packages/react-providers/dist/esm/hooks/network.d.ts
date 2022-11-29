import * as ethers from "ethers";
/**
 * @public
 * @return Gas Price
 * @example
 *  const {gasPrice} = useNetworkInfo()
*/
export declare const useNetworkInfo: () => {
    gasPrice: ethers.BigNumber | undefined;
};
