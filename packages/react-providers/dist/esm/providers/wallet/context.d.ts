import React from 'react';
import { WalletDataType } from './provider';
declare type WalletContextType = {
    walletData: WalletDataType;
    setWalletData: React.Dispatch<React.SetStateAction<WalletDataType>>;
};
export declare const WalletContext: React.Context<WalletContextType>;
export declare function useWallet(): WalletContextType;
export {};
