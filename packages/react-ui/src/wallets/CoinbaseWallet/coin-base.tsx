import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers } from "ethers";
import Image from "next/image";
// import { ICoinBaseWallet, IWallet } from "../../Interface/ICoinBaseWallet";

/////////////////////////////////////////////////////
////////////////REMOVE THIS after testing ///////////
/////////////////////////////////////////////////////

// const CoinBaseWallet = ({coinBaseWalletConfig}:any) => {
const CoinBaseWallet = () => {

  let coinbaseWallet;
  let ethereum: any = null;
  
  //   coinbaseWallet = new CoinbaseWalletSDK({
  //     appName: String(coinBaseWalletConfig.APP_NAME),
  //     appLogoUrl: String(coinBaseWalletConfig.APP_LOGO_URL),
  //     darkMode: coinBaseWalletConfig.isDarkMode,
  //   });
  //   ethereum = coinbaseWallet.makeWeb3Provider(
  //     String(coinBaseWalletConfig.DEFAULT_ETH_JSONRPC_URL),
  //     coinBaseWalletConfig.DEFAULT_CHAIN_ID
  //   );

    coinbaseWallet = new CoinbaseWalletSDK({
      appName: "My Awesome App",
      appLogoUrl: "https://example.com/logo.png",
      darkMode: true,
    });
    ethereum = coinbaseWallet.makeWeb3Provider(
      "https://goerli.infura.io/v3/7e3e924eb24f4cb99fb7dc68e559cdff",
      1
    );


  const connectCoinWallet = async () => {
    try {
    const provider = new ethers.providers.Web3Provider(ethereum as any);
    await provider.send("eth_requestAccounts", []);
    } catch (error:any) {
      alert(error.message);
    }
  };

  return (
    <Image
      // loader={myLoader}
      src="/imgs/coinbase.jpg"
      alt="Picture of the author"
      width={50}
      height={50}
      onClick={connectCoinWallet}
    />
  );
};
export default CoinBaseWallet;
