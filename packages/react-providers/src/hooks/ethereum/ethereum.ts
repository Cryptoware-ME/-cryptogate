
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { ethers, providers } from "ethers";
import { useBrowserWallets } from "./useBrowserWallet"
import { useConfig, useErrorsBag, useEvmNode, useNetwork } from "../../providers"
import { useWallet } from "../../providers/wallet";
import { getChainById } from "../../helpers";
import { EvmAddress } from "../../models/types";

export const useEthereum = () => {
    const { networkData, setNetworkData } = useNetwork()
    const { walletData, setWalletData } = useWallet()
    const { brave, metamask } = useBrowserWallets()
    const { provider, setProvider } = useEvmNode()
    const { errors, addError } = useErrorsBag()
    const config = useConfig()
    let coinbaseWallet = null;
    let ethereum: any = null;
    let connector: any = null;

    const { account } = walletData;

    const setData = (_account: EvmAddress, _chainId: number, _provider: any) => {
        setWalletData({ account: _account })
        setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) })
        _provider && setProvider(new providers.Web3Provider(_provider))
    }

    const activateBraveWallet = async () => {
        if (brave) {
            try {
                const res = await brave.send("eth_requestAccounts", []);
                const chainIdRes = await brave.send("eth_chainId", []);
                setData(res.result[0], chainIdRes.result.split("x")[1], brave)
            } catch (err) { addError(err) }
        }
    }

    const activateMetamaskWallet = async () => {
        if (metamask) {
            try {
                const res = await metamask.send("eth_requestAccounts", []);
                const chainIdRes = await metamask.send("eth_chainId", []);
                setData(res.result[0], chainIdRes.result.split("x")[1], metamask)
            } catch (err) { addError(err) }
        }
    }

    const activateCoinbaseWallet = async () => {
        if (config && config.walletsConfig && config.walletsConfig.coinbase) {
            coinbaseWallet = new CoinbaseWalletSDK(config.walletsConfig.coinbase);
            // TODO: DOUBLE CCECK THE RES OF ethereum.
            // Might not need providers.Web3Provider
            ethereum = coinbaseWallet.makeWeb3Provider(
                "https://goerli.infura.io/v3/7e3e924eb24f4cb99fb7dc68e559cdff",
                1
            );
            try {
                const _provider = new ethers.providers.Web3Provider(ethereum);
                const accounts = await _provider.send("eth_requestAccounts", [])
                const chainIdRes = await _provider.send("eth_chainId", []);
                setData(accounts[0], chainIdRes.split("x")[1], _provider)
            } catch (err) { addError(err) }
        } else addError("Missing coinbase wallet configuration")
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
            setData(accounts[0], chainId, undefined)
        });
        connector.on("session_update", (error: any, payload: any) => {
            if (error) addError(error)
            const { accounts, chainId } = payload.params[0];
            setData(accounts[0], chainId, undefined)
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
        setWalletData({ account: undefined })
        config && setProvider(new providers.JsonRpcProvider(
            config.ethConfig.readOnlyUrls[networkData.chainId]
        ))
    }

    return {
        account,
        provider,
        active: !!provider,
        network: networkData,
        activateBraveWallet,
        activateMetamaskWallet,
        activateCoinbaseWallet,
        activateWalletConnect,
        deactivate,
        errors
    }
}