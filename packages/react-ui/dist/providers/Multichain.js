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
import React from "react";
import { EthDappContextProvider } from "./EthDapp";
import { SolDappContextProvider } from "./SolDapp";
export var MultichainProvider = function (_a) {
    var ethConfig = _a.ethConfig, solConfig = _a.solConfig, ethContracts = _a.ethContracts, children = _a.children;
    return (React.createElement(EthDappContextProvider, { config: ethConfig, contracts: ethContracts },
        React.createElement(SolDappContextProvider, __assign({}, solConfig), children)));
};
//# sourceMappingURL=Multichain.js.map