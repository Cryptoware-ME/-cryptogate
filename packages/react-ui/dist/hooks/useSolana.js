var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolDappContext } from '../providers/SolDapp';
import { SolWalletsContext } from '../providers/SolWallets';
export var useSolana = function () {
    var wallet = useWallet();
    var connection = useConnection();
    var dappCtx = React.useContext(SolDappContext);
    var walletsCtx = React.useContext(SolWalletsContext);
    if (dappCtx === undefined) {
        throw new Error('useSolana must be used within a SolDappContext');
    }
    if (walletsCtx === undefined) {
        throw new Error('useSolana must be used within a SolDappContext');
    }
    var setSolConfig = dappCtx.setSolConfig;
    var Wallets = walletsCtx;
    return __assign(__assign(__assign({}, wallet), connection), { wallets: Wallets, setSolConfig: setSolConfig });
};
//# sourceMappingURL=useSolana.js.map