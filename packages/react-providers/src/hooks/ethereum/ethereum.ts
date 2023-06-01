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

Custom hook for interacting with Ethereum wallets and networks.

@returns {{

    account: string | undefined,

    ethBalance: number,
    
    ens: string | undefined,
    
    provider: ethers.providers.Web3Provider | undefined,
    
    active: boolean,
    
    network: { chainId: string, chain: object },
    
    activateBraveWallet: () => Promise<void>,
    
    activateMetamaskWallet: () => Promise<void>,
    
    activateCoinbaseWallet: () => Promise<void>,
    
    activateWalletConnect: () => Promise<void>,
    
    activateShabakatWallet: () => Promise<void>,
    
    deactivate: () => void,
    
    errors: any[]
    
    }}
    */
export const useEthereum = () => {
  /*
    
    Retrieves and manages wallet data from the wallet provider.
    */
  const {
    walletData: { account },
    setWalletData,
  } = useWallet();
  /**
    
    Retrieves browser wallets for Brave, MetaMask, Coinbase, and Shabakat.
    */
  const { brave, metamask, coinbase, shabakat } = useBrowserWallets();
  /**
    
    Retrieves network data and manages it.
    */
  const { networkData, setNetworkData } = useNetwork();
  /**
    
    Retrieves Ethereum configuration and wallet configuration.
    */
  const { ethConfig, walletsConfig } = useConfig();
  /**
    
    Retrieves ENS and Ethereum balance for the account.
    */
  const { ens, ethBalance } = useAccount(account);
  /**
    
    Retrieves Ethereum provider and manages it.
    */
  const { provider, setProvider } = useEvmNode();
  /**
    
    Manages errors encountered during wallet interaction.
    */
  const { errors, addError } = useErrorsBag();
  /**
    
    Sets up event listeners and handles account and chain changes.
    @param {ethers.providers.Web3Provider} provider - The Ethereum provider.
    */
  useEffect(() => {
    let _provider = provider as ethers.providers.Web3Provider;
    let proxyProvider =
      _provider?.provider as unknown as ethers.providers.Web3Provider;
    if (proxyProvider) {
      proxyProvider.on("accountsChanged", (accounts: any) => {
        accounts[0] ? setWalletData({ account: accounts[0] }) : deactivate();
      });
      proxyProvider.on("chainChanged", (chainId: any) => {
        const _chainId = chainId.toString().split("x")[1] ?? chainId;
        setNetworkData({
          chainId: _chainId,
          chain: getChainById(chainId),
        });
      });
      proxyProvider.on("disconnect", () => deactivate);
    }
  }, [provider]);
  /**
    
    Sets the wallet and network data and updates the provider.
    @param {string} _account - The Ethereum account address.
    @param {number} _chainId - The Ethereum chain ID.
    @param {any} _provider - The Ethereum provider.
    */
  const setData = (_account: EvmAddress, _chainId: number, _provider: any) => {
    setWalletData({ account: _account });
    setNetworkData({ chainId: _chainId, chain: getChainById(_chainId) });
    _provider && setProvider(new ethers.providers.Web3Provider(_provider));
  };
  /**
    
    Activates the selected wallet and sets the wallet and network data.
    @param {any} _provider - The Ethereum provider.
    */
  const activateWallet = async (_provider: any) => {
    try {
      const res = await _provider.send("eth_requestAccounts", []);
      const chainIdRes = await _provider.send("eth_chainId", []);
      if (res.result)
        setData(res.result[0], parseInt(chainIdRes.result), _provider);
      else setData(res[0], parseInt(chainIdRes.result), _provider);
    } catch (err) {
      addError(err);
    }
  };
  /**
    
    Activates the Shabakat wallet if available.
    */
  const activateShabakatWallet = React.useCallback(async () => {
    if (shabakat) activateWallet(shabakat);
  }, [shabakat]);
  /**
    
    Activates the Brave wallet if available.
    */
  const activateBraveWallet = React.useCallback(async () => {
    if (brave) activateWallet(brave);
  }, [brave]);
  /**
    
    Activates the MetaMask wallet if available.
    */
  const activateMetamaskWallet = React.useCallback(async () => {
    if (metamask) activateWallet(metamask);
  }, [metamask]);
  /**
    
    Activates the Coinbase wallet if available. If not, handles popup for wallet configuration.
    */
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
  /**
    
    Activates the WalletConnect wallet and sets the wallet and network data.
    */
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
  /**
    
    Deactivates the wallet and resets the wallet and network data.
    */
  const deactivate = React.useCallback(() => {
    setWalletData({ account: undefined });
    if (ethConfig) {
      setNetworkData({
        chainId: ethConfig.defaultNetwork.chainId ?? -1,
        chain: ethConfig.defaultNetwork,
      });
      setProvider(
        new ethers.providers.JsonRpcProvider(
          ethConfig.readOnlyUrls[ethConfig.defaultNetwork.chainId ?? -1]
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
