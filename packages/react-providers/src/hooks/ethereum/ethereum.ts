
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { ethers } from "ethers";
import { useBrowserWallets } from "./useBrowserWallet"
import { useErrorsBag } from "../../providers"
import { useWallet } from "../../providers/wallet";

export const useEthereum = () => {
    const { brave, metamask } = useBrowserWallets()
    const { addError } = useErrorsBag()
    const { walletData, setWalletData } = useWallet()
    let coinbaseWallet = null;
    let ethereum: any = null;
    let connector: any = null;

    const { account } = walletData;

    const activateBraveWallet = async () => {
        if (brave) {
            let res = await brave.send("eth_requestAccounts", []);
            setWalletData && setWalletData({ account: res.result[0] })
        }
    }

    const activateMetamaskWallet = async () => {
        if (metamask) {
            let res = await metamask.send("eth_requestAccounts", []);
            setWalletData && setWalletData({ account: res.result[0] })
        }
    }

    const activateCoinbaseWallet = async () => {
        coinbaseWallet = new CoinbaseWalletSDK({
            appName: "My Awesome App",
            appLogoUrl: "https://example.com/logo.png",
            darkMode: true,
        });
        ethereum = coinbaseWallet.makeWeb3Provider(
            "https://goerli.infura.io/v3/7e3e924eb24f4cb99fb7dc68e559cdff",
            1
        );
        const provider = new ethers.providers.Web3Provider(ethereum);
        provider.send("eth_requestAccounts", []).then((accounts) => setWalletData && setWalletData(accounts[0])).catch(addError);
    }

    const activateWalletConnect = () => {
        connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal,
        });
        if (!connector.connected) {
            connector.createSession();
        }
        connector.on("connect", (error: any, payload: any) => {
            if (error) addError(error)
            const { accounts, chainId } = payload.params[0];
            setWalletData && setWalletData(accounts[0])
        });
        connector.on("session_update", (error: any, payload: any) => {
            if (error) addError(error)
            const { accounts, chainId } = payload.params[0];
            setWalletData && setWalletData(accounts[0])
        });
        connector.on("disconnect", (error: any, payload: any) => {
            if (error) addError(error)
            connector = null
        });
    }

    const deactivate = () => {
        connector = null
        ethereum = null
        coinbaseWallet = null
    }

    return {
        account,
        activateBraveWallet,
        activateMetamaskWallet,
        activateCoinbaseWallet,
        activateWalletConnect,
        deactivate
    }
}