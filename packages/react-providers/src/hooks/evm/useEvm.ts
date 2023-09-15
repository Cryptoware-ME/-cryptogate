import React, { useEffect } from "react";
import * as ethers from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
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
import { ChainId } from "../../constants/chains";

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
      proxyProvider.removeAllListeners && proxyProvider.removeAllListeners();
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
      const chainIdRes =
        _provider.getChainId && typeof _provider.getChainId == "function"
          ? _provider.getChainId()
          : (await _provider.send("eth_chainId", [])).result;
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
    const provider = await EthereumProvider.init({
      projectId: "8f85185f326acbf30d95911cc164929a",
      chains: [137],
      optionalChains: Object.values(ChainId)
        .filter((i) => typeof i == "number")
        .map((j) => j as number),
      showQrModal: true,
    });

    provider.on("connect", () =>
      setProvider(new ethers.providers.Web3Provider(provider))
    );

    provider.on("accountsChanged", (accounts: string[]) => {
      setWalletData({ account: accounts[0] as EvmAddress });
    });

    provider.on("chainChanged", (_network: any) => {
      let _chainId = parseInt(_network);
      setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) });
    });

    provider.on("disconnect", deactivate);

    await provider.enable();
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
