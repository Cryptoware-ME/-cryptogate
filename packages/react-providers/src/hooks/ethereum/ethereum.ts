
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { ethers } from "ethers";
import { useBrowserWallets } from "./useBrowserWallet"
import { useErrorsBag, useEvmNode, useNetwork, useWindow } from "../../providers"
import { useWallet } from "../../providers/wallet";
import { getChainById } from "../../helpers";

export const useEthereum = () => {
    const { networkData, setNetworkData } = useNetwork()
    const { walletData, setWalletData } = useWallet()
    const { brave, metamask } = useBrowserWallets()
    const { addError } = useErrorsBag()
    const provider = useEvmNode()
    const active = useWindow()
    let coinbaseWallet = null;
    let ethereum: any = null;
    let connector: any = null;

    const { account } = walletData;

    const activateBraveWallet = async () => {
        if (brave) {
            try {
                const res = await brave.send("eth_requestAccounts", []);
                const chainIdRes = await brave.send("eth_chainId", []);
                setWalletData && setWalletData({ account: res.result[0] })
                setNetworkData && setNetworkData({ chainId: chainIdRes.result.split("x")[1], chain: getChainById(chainIdRes.result.split("x")[1]) })
            } catch (err) { addError(err) }
        }
    }

    const activateMetamaskWallet = async () => {
        if (metamask) {
            try {
                const res = await metamask.send("eth_requestAccounts", []);
                const chainIdRes = await metamask.send("eth_chainId", []);
                setWalletData && setWalletData({ account: res.result[0] })
                setNetworkData && setNetworkData({ chainId: chainIdRes.result.split("x")[1], chain: getChainById(chainIdRes.result.split("x")[1]) })
            } catch (err) { addError(err) }
        }
    }

    const activateCoinbaseWallet = async () => {
        // TODO: CHANGE CONFIG SOURCE
        coinbaseWallet = new CoinbaseWalletSDK({
            appName: "My Awesome App",
            appLogoUrl: "https://example.com/logo.png",
            darkMode: true,
        });
        ethereum = coinbaseWallet.makeWeb3Provider(
            "https://goerli.infura.io/v3/7e3e924eb24f4cb99fb7dc68e559cdff",
            1
        );
        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const accounts = await provider.send("eth_requestAccounts", [])
            const chainIdRes = await provider.send("eth_chainId", []);
            setWalletData && setWalletData({ account: accounts[0] })
            setNetworkData && setNetworkData({ chainId: chainIdRes.split("x")[1], chain: getChainById(chainIdRes.split("x")[1]) })
        } catch (err) { addError(err) }
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
            setWalletData && setWalletData({ account: accounts[0] })
            setNetworkData && setNetworkData({ chainId: chainId, chain: getChainById(chainId) })
        });
        connector.on("session_update", (error: any, payload: any) => {
            if (error) addError(error)
            const { accounts, chainId } = payload.params[0];
            setWalletData && setWalletData({ account: accounts[0] })
            setNetworkData && setNetworkData({ chainId: chainId, chain: getChainById(chainId) })
        });
        connector.on("disconnect", (error: any, payload: any) => {
            if (error) addError(error)
            connector = null
        });
    }

    // TODO: DEACTIVATE
    const deactivate = () => {
        connector = null
        ethereum = null
        coinbaseWallet = null
    }

    return {
        account,
        active,
        network: networkData,
        provider,
        activateBraveWallet,
        activateMetamaskWallet,
        activateCoinbaseWallet,
        activateWalletConnect,
        deactivate
    }
}