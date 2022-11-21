import React from "react";
import * as ethers from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useConfig, useErrorsBag, useEvmNode, useNetwork } from "../../providers"
import { useBrowserWallets } from "./useBrowserWallet"
import { useWallet } from "../../providers/wallet";
import { getChainById } from "../../helpers";
import { EvmAddress } from "../../models/types";
import { useAccount } from "../account";

/**
 * @public 
*/
export const useEthereum = () => {
    const { walletData: { account }, setWalletData } = useWallet()
    const { brave, metamask, coinbase } = useBrowserWallets()
    const { networkData, setNetworkData } = useNetwork()
    const { ethConfig, walletsConfig } = useConfig()
    const { ens, ethBalance } = useAccount(account)
    const { provider, setProvider } = useEvmNode()
    const { errors, addError } = useErrorsBag()

    const setData = (_account: EvmAddress, _chainId: number, _provider: any) => {
        setWalletData({ account: _account })
        setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) })
        _provider && setProvider(new ethers.providers.Web3Provider(_provider))
    }

    const activateWallet = async (_provider: any) => {
        try {
            const res = await _provider.send("eth_requestAccounts", []);
            const chainIdRes = await _provider.send("eth_chainId", []);
            if (res.result)
                setData(res.result[0], chainIdRes.result.split("x")[1], _provider)
            else
                setData(res[0], chainIdRes.split("x")[1], _provider)
        } catch (err) { addError(err) }
    }

    const activateBraveWallet = React.useCallback(async () => {
        if (brave) activateWallet(brave)
    }, [brave])

    const activateMetamaskWallet = React.useCallback(async () => {
        if (metamask) activateWallet(metamask)
    }, [metamask])

    const activateCoinbaseWallet = React.useCallback(async () => {
        if (coinbase) activateWallet(coinbase)
        // @Cryptogate: Might remove this later (handles popup if no extension found)
        else if (walletsConfig?.coinbase) {
            const _coinbase = new CoinbaseWalletSDK(walletsConfig.coinbase).makeWeb3Provider()
            activateWallet(_coinbase)
        }
    }, [coinbase, walletsConfig])

    // @Cryptogate: REBUILD THIS METHOD
    const activateWalletConnect = () => {
        let connector: WalletConnect | undefined = new WalletConnect({
            bridge: "https://bridge.walletconnect.org",
            qrcodeModal: QRCodeModal,
        })
        if (connector) {
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
                connector = undefined
            });
        }
    }

    const deactivate = React.useCallback(() => {
        setWalletData({ account: undefined })
        if (ethConfig) {
            setNetworkData({ chainId: ethConfig.defaultNetwork.chainId, chain: ethConfig.defaultNetwork })
            setProvider(new ethers.providers.JsonRpcProvider(
                ethConfig.readOnlyUrls[ethConfig.defaultNetwork.chainId]
            ))
        }
    }, [ethConfig])

    return {
        account,
        ethBalance,
        ens,
        provider,
        active: !!provider,
        network: networkData,
        activateBraveWallet,
        activateMetamaskWallet,
        activateCoinbaseWallet,
        activateWalletConnect,
        deactivate,
        errors,
    }
}