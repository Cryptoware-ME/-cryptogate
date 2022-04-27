'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactProviders = require('@cryptogate/react-providers');
var Jazzicon = require('react-jazzicon');
var reactDeviceDetect = require('react-device-detect');
var react = require('react');
var detectEthereumProvider = require('@metamask/detect-provider');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Jazzicon__default = /*#__PURE__*/_interopDefaultLegacy(Jazzicon);
var detectEthereumProvider__default = /*#__PURE__*/_interopDefaultLegacy(detectEthereumProvider);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Identicon = function () {
    var ethereum = reactProviders.useMultichain().ethereum;
    var account = ethereum.account;
    return (jsxRuntime.jsx(Jazzicon__default["default"], { diameter: reactDeviceDetect.isMobile ? 30 : 40, seed: Jazzicon.jsNumberForAddress((account === null || account === void 0 ? void 0 : account.toString()) || '') }));
};

var styles$4 = require("./connectwalletbutton.module.css");
var defaultStyle = {
    backgroundColor: "#0d0d0d",
    color: "white",
    padding: "4px 10px",
    borderWidth: 1,
    borderRadius: "5px",
    height: "auto",
};
var index = function (_a) {
    var setOpenOptions = _a.setOpenOptions;
    var ethereum = reactProviders.useMultichain().ethereum;
    var account = ethereum.account;
    return account ? (jsxRuntime.jsx("div", __assign({ className: styles$4.connectContainer }, { children: jsxRuntime.jsx("div", __assign({ className: styles$4.jazzicon }, { children: jsxRuntime.jsx(Identicon, {}) })) }))) : (jsxRuntime.jsx("button", __assign({ style: defaultStyle, className: styles$4.connectBtn, onClick: function () {
            setOpenOptions(true);
        } }, { children: "Connect Wallet" })));
};

var styles$3 = require("./walletlisting.module.css");
var WalletListing = function (_a) {
    _a.iconSrc; var heading = _a.heading, onWalletCall = _a.onWalletCall, _b = _a.isWhite, isWhite = _b === void 0 ? false : _b, _c = _a.noBottomBorder, noBottomBorder = _c === void 0 ? false : _c;
    return (jsxRuntime.jsxs("div", __assign({ style: noBottomBorder ? { borderBottom: "0" } : {}, className: styles$3.walletListingWrapper, onClick: onWalletCall }, { children: [isWhite && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { className: styles$3.walletIconBackground }) })), !isWhite && (jsxRuntime.jsx(jsxRuntime.Fragment, {})), jsxRuntime.jsx("h6", __assign({ className: styles$3.walletListingName }, { children: heading }))] })));
};

var styles$2 = require("./walletlist.module.css");
var DCBMetamask = require("../../assets/images/wallets/dcb-metamask-icon.svg");
var DCBWalletconnect = require("../../assets/images/wallets/dcb-walletconnect.svg");
// const DCBFortmatic = require("../../assets/images/wallets/dcb-fortmatic.svg");
var DCBCoinbase = require("../../assets/images/wallets/dcb-coinbase.png");
var EthWalletList = function (_a) {
    var EthWallets = _a.EthWallets;
    var ethereum = reactProviders.useMultichain().ethereum;
    var activateBrowserWallet = ethereum.activateBrowserWallet, activate = ethereum.activate, wallets = ethereum.wallets;
    var _b = react.useState(false), openMetamaskAllow = _b[0], setOpenMetamaskAllow = _b[1];
    react.useEffect(function () {
        detectEthereumProvider__default["default"]().then(function (provider) {
            setOpenMetamaskAllow(!!provider);
        });
    }, []);
    var injectedHandle = function () {
        var currentLink = window.location.hostname +
            window.location.pathname +
            window.location.search;
        var metaMaskDeepLink = "https://metamask.app.link/dapp/" + currentLink;
        if (openMetamaskAllow) {
            activateBrowserWallet();
        }
        else {
            if (reactDeviceDetect.isMobile) {
                window.open(metaMaskDeepLink, "_blank");
            }
            else {
                alert("You should install MetaMask browser extension");
            }
        }
    };
    var regHandle = function (name, connector) {
        activate(connector);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: styles$2.walletListWrapper }, { children: [EthWallets.metamask && (jsxRuntime.jsx(WalletListing, { isWhite: false, noBottomBorder: false, heading: "Metamask", iconSrc: DCBMetamask, onWalletCall: injectedHandle })), EthWallets.coinbase && (jsxRuntime.jsx(WalletListing, { isWhite: false, noBottomBorder: false, heading: "Coinbase", iconSrc: DCBCoinbase, onWalletCall: function () { return regHandle("Coinbase Wallet", wallets.Coinbase); } })), EthWallets.walletConnect && (jsxRuntime.jsx(WalletListing, { isWhite: false, noBottomBorder: true, heading: "WalletConnect", iconSrc: DCBWalletconnect, onWalletCall: function () {
                    return regHandle("Wallet Connect API", wallets.WalletConnect);
                } }))] })));
};

var styles$1 = require("./walletlist.module.css");
var SolWalletList = function (_a) {
    var SolWallets = _a.SolWallets;
    return (jsxRuntime.jsxs("div", __assign({ className: styles$1.walletListWrapper }, { children: [SolWallets.phantom && (
            // <WalletListing
            //   heading="Metamask"
            //   iconSrc={DCBMetamask}
            //   onWalletCall={injectedHandle}
            // />
            jsxRuntime.jsx(jsxRuntime.Fragment, {})), SolWallets.slope && (
            // <WalletListing
            //   heading="Coinbase"
            //   iconSrc={DCBCoinbase}
            //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
            // />
            jsxRuntime.jsx(jsxRuntime.Fragment, {})), SolWallets.solflare && (
            // <WalletListing
            //   heading="Fortmatic"
            //   iconSrc={DCBFortmatic}
            //   onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
            // />
            jsxRuntime.jsx(jsxRuntime.Fragment, {}))] })));
};

var styles = require("./connectwalletlist.module.css");
var ConnectWalletList = function (_a) {
    var openOptions = _a.openOptions, setOpenOptions = _a.setOpenOptions, EthWallets = _a.EthWallets, SolWallets = _a.SolWallets;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign({ style: {
                    width: 270,
                    backgroundColor: "white",
                    transition: "0.5s",
                    zIndex: 10001,
                    position: "fixed",
                    right: !openOptions ? -270 : 0,
                    marginTop: 50,
                    height: "auto",
                    maxHeight: "100%",
                    overflowY: "auto",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    boxShadow: "1px 1px 2px 2px #888888",
                } }, { children: jsxRuntime.jsx("div", __assign({ className: styles.menuDivision, style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }, onClick: function () { return setOpenOptions(false); } }, { children: jsxRuntime.jsxs("div", __assign({ style: { marginRight: 10 } }, { children: [jsxRuntime.jsx("p", { children: "Connect with one of the available wallet providers." }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx(EthWalletList, { EthWallets: EthWallets }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx(SolWalletList, { SolWallets: SolWallets })] })) })) })), openOptions && (jsxRuntime.jsx("div", { style: {
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 10000,
                    position: "fixed",
                    left: 0,
                }, onClick: function () { return setOpenOptions(false); } }))] }));
};

var ConnectWalletComponent = function () {
    var _a = react.useState(false), openOptions = _a[0], setOpenOptions = _a[1];
    var EthWallets = {
        metamask: true,
        coinbase: true,
        fortmatic: true,
        walletConnect: true,
    };
    var SolWallets = {
        phantom: true,
        slope: true,
        solflare: true,
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index, { setOpenOptions: setOpenOptions }), openOptions ? (jsxRuntime.jsx(ConnectWalletList, { openOptions: openOptions, setOpenOptions: setOpenOptions, EthWallets: EthWallets, SolWallets: SolWallets })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}))] }));
};

exports.ConnectWalletComponent = ConnectWalletComponent;
//# sourceMappingURL=index.js.map
