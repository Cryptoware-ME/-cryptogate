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
import React, { useEffect, useState } from "react";
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter } from "@solana/wallet-adapter-wallets";
export var SolWalletsContext = React.createContext({});
export var SolWalletsContextProvider = function (_a) {
    var network = _a.network, children = _a.children;
    var _b = useState({}), Wallets = _b[0], setWallets = _b[1];
    useEffect(function () {
        if (network) {
            setWallets({
                Phantom: new PhantomWalletAdapter(),
                Slope: new SlopeWalletAdapter(),
                Solflare: new SolflareWalletAdapter({ network: network }),
                Sollet: new SolletExtensionWalletAdapter({ network: network })
            });
        }
    }, [network]);
    return (React.createElement(SolWalletsContext.Provider, { value: __assign({}, Wallets) }, children));
};
//# sourceMappingURL=SolWallets.js.map