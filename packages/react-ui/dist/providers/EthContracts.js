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
import { useEthers, useNetwork } from "@usedapp/core";
import { Contract } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';
export var EthContractsContext = React.createContext({});
export var EthContractsContextProvider = function (_a) {
    var contracts = _a.contracts, children = _a.children;
    var network = useNetwork().network;
    var library = useEthers().library;
    var _b = useState({}), Contracts = _b[0], setContracts = _b[1];
    useEffect(function () {
        var ethContracts = {};
        if (network.chainId && contracts && library) {
            contracts.forEach(function (c) {
                if (c.name && c.address && c.abi) {
                    var interfaceABI = new Interface(c.abi);
                    ethContracts[c.name] = {
                        address: network.chainId ? c.address[network.chainId] : '',
                        interface: interfaceABI,
                        contract: new Contract(network.chainId ? c.address[network.chainId] : '', interfaceABI)
                    };
                }
            });
            if (!ethContracts && ethContracts !== {} && ethContracts !== null) {
                setContracts(ethContracts);
            }
        }
    }, [network, contracts]);
    return (React.createElement(EthContractsContext.Provider, { value: __assign({}, Contracts) }, children));
};
//# sourceMappingURL=EthContracts.js.map