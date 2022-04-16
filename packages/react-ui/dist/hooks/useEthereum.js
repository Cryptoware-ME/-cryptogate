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
import { useEthers } from '@usedapp/core';
import { EthDappContext } from '../providers/EthDapp';
import { EthContractsContext } from '../providers/EthContracts';
import { EthWalletsContext } from '../providers';
export var useEthereum = function () {
    var ethereum = useEthers();
    var dappCtx = React.useContext(EthDappContext);
    var walletsCtx = React.useContext(EthWalletsContext);
    var contractsCtx = React.useContext(EthContractsContext);
    if (dappCtx === undefined) {
        throw new Error('useEthereum must be used within a EthDappContext');
    }
    if (walletsCtx === undefined) {
        throw new Error('useEthereum must be used within a EthWalletsContext');
    }
    if (contractsCtx === undefined) {
        throw new Error('useEthereum must be used within a EthContractsContext');
    }
    var setEthConfig = dappCtx.setEthConfig;
    var Wallets = walletsCtx;
    var getContract = function (name) { return contractsCtx[name]; };
    return __assign(__assign({}, ethereum), { wallets: Wallets, getContract: getContract, setEthConfig: setEthConfig });
};
//# sourceMappingURL=useEthereum.js.map