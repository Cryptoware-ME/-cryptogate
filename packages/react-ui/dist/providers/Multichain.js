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
exports.MultichainProvider = void 0;
var react_1 = __importDefault(require("react"));
var EthDapp_1 = require("./EthDapp");
var SolDapp_1 = require("./SolDapp");
var MultichainProvider = function (_a) {
    var ethConfig = _a.ethConfig, solConfig = _a.solConfig, ethContracts = _a.ethContracts, children = _a.children;
    return (react_1["default"].createElement(EthDapp_1.EthDappContextProvider, { config: ethConfig, contracts: ethContracts },
        react_1["default"].createElement(SolDapp_1.SolDappContextProvider, __assign({}, solConfig), children)));
};
exports.MultichainProvider = MultichainProvider;
//# sourceMappingURL=Multichain.js.map