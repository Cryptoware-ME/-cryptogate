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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useEthereum = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@usedapp/core");
var EthDapp_1 = require("../providers/EthDapp");
var EthContracts_1 = require("../providers/EthContracts");
var providers_1 = require("../providers");
var useEthereum = function () {
    var ethereum = (0, core_1.useEthers)();
    var dappCtx = react_1["default"].useContext(EthDapp_1.EthDappContext);
    var walletsCtx = react_1["default"].useContext(providers_1.EthWalletsContext);
    var contractsCtx = react_1["default"].useContext(EthContracts_1.EthContractsContext);
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
exports.useEthereum = useEthereum;
//# sourceMappingURL=useEthereum.js.map