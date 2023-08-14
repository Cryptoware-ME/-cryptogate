import React, { useEffect } from "react";
import * as ethers from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  useConfig,
  useErrorsBag,
  useEvmNode,
  useNetwork,
} from "../../providers";
import { useBrowserWallets } from "./useBrowserWallet";
import { useWallet } from "../../providers/wallet";
import { getChainById } from "../../helpers";
import { EvmAddress } from "../../models/types";
import { useAccount } from "../account";

/**
 * @public
 */
export const useEvm = () => {
  const {
    walletData: { account },
    setWalletData,
  } = useWallet();
  const { brave, metamask, coinbase, shabakat } = useBrowserWallets();
  const { networkData, setNetworkData } = useNetwork();
  const { ethConfig, walletsConfig } = useConfig();
  const { ens, ethBalance } = useAccount(account);
  const { provider, setProvider } = useEvmNode();
  const { errors, addError } = useErrorsBag();

  useEffect(() => {
    let _provider = provider as ethers.providers.Web3Provider;
    let proxyProvider =
      _provider?.provider as unknown as ethers.providers.Web3Provider;
    if (proxyProvider) {
      proxyProvider.removeAllListeners();
      proxyProvider.on("accountsChanged", (accounts: any) => {
        accounts[0] ? setWalletData({ account: accounts[0] }) : deactivate();
      });
      proxyProvider.on("chainChanged", (chainId: any) => {
        const _chainId = parseInt(chainId);
        setNetworkData({
          chainId: _chainId,
          chain: getChainById(_chainId),
        });
      });
      proxyProvider.on("disconnect", (_) => deactivate);
    }
  }, [provider]);

  const setData = (_account: EvmAddress, _chainId: number, _provider: any) => {
    setWalletData({ account: _account });
    setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) });
    provider?.removeAllListeners();
    _provider && setProvider(new ethers.providers.Web3Provider(_provider));
  };

  const activateWallet = async (_provider: any) => {
    try {
      const res = await _provider.send("eth_requestAccounts", []);
      console.log("res: ", res);
      const chainIdRes =
        _provider.getChainId && typeof _provider.getChainId == "function"
          ? _provider.getChainId()
          : (await _provider.send("eth_chainId", [])).result;
      console.log("chainIdRes: ", chainIdRes);
      if (res.result) setData(res.result[0], parseInt(chainIdRes), _provider);
      else setData(res[0], parseInt(chainIdRes), _provider);
    } catch (err) {
      addError(err);
    }
  };

  const activateShabakatWallet = React.useCallback(async () => {
    if (shabakat) activateWallet(shabakat);
  }, [shabakat]);

  const activateBraveWallet = React.useCallback(async () => {
    if (brave) activateWallet(brave);
  }, [brave]);

  const activateMetamaskWallet = React.useCallback(async () => {
    if (metamask) activateWallet(metamask);
  }, [metamask]);

  const activateCoinbaseWallet = React.useCallback(async () => {
    console.log(coinbase);
    if (coinbase) activateWallet(coinbase);
    // @Cryptogate: Might remove this later (handles popup if no extension found)
    // appLogo is optional
    else if (walletsConfig) {
      const _coinbase = new CoinbaseWalletSDK({
        ...walletsConfig,
      }).makeWeb3Provider();
      activateWallet(_coinbase);
    }
  }, [coinbase, walletsConfig]);

  const activateWalletConnect = async () => {
    const provider = new WalletConnectProvider({
      infuraId: "98d5cf1c763f4224afa492b70366effa",
      bridge: "https://bridge.walletconnect.org",
      qrcodeModal: QRCodeModal,
    });
    if (!provider.connected) {
      await provider.enable();
    }
    setData(provider.accounts[0] as EvmAddress, provider.chainId, provider);
  };

  const deactivate = React.useCallback(() => {
    setWalletData({ account: undefined });
    if (ethConfig) {
      setNetworkData({
        chainId: ethConfig.defaultNetwork?.chainId ?? -1,
        chain: ethConfig.defaultNetwork,
      });
      setProvider(
        new ethers.providers.JsonRpcProvider(
          ethConfig.readOnlyUrls[ethConfig.defaultNetwork?.chainId ?? -1]
        )
      );
    } else {
      addError("EthConfig not found");
    }
  }, [ethConfig]);

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
    activateShabakatWallet,
    deactivate,
    errors,
  };
};
