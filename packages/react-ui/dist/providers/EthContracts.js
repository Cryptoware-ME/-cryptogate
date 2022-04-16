"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.EthContractsContextProvider = exports.EthContractsContext = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@usedapp/core");
var contracts_1 = require("@ethersproject/contracts");
var abi_1 = require("@ethersproject/abi");
exports.EthContractsContext = react_1["default"].createContext({});
var EthContractsContextProvider = function (_a) {
    var contracts = _a.contracts, children = _a.children;
    var network = (0, core_1.useNetwork)().network;
    var library = (0, core_1.useEthers)().library;
    var _b = (0, react_1.useState)({}), Contracts = _b[0], setContracts = _b[1];
    (0, react_1.useEffect)(function () {
        var ethContracts = {};
        if (network.chainId && contracts && library) {
            contracts.forEach(function (c) {
                if (c.name && c.address && c.abi) {
                    var interfaceABI = new abi_1.Interface(c.abi);
                    ethContracts[c.name] = {
                        address: network.chainId ? c.address[network.chainId] : '',
                        interface: interfaceABI,
                        contract: new contracts_1.Contract(network.chainId ? c.address[network.chainId] : '', interfaceABI)
                    };
                }
            });
            if (!ethContracts && ethContracts !== {} && ethContracts !== null) {
                setContracts(ethContracts);
            }
        }
    }, [network, contracts]);
    return (react_1["default"].createElement(exports.EthContractsContext.Provider, { value: __assign({}, Contracts) }, children));
};
exports.EthContractsContextProvider = EthContractsContextProvider;
//# sourceMappingURL=EthContracts.js.map