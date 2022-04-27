import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMultichain } from '@cryptogate/react-providers';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { isMobile } from 'react-device-detect';
import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

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
    var ethereum = useMultichain().ethereum;
    var account = ethereum.account;
    return (jsx(Jazzicon, { diameter: isMobile ? 30 : 40, seed: jsNumberForAddress((account === null || account === void 0 ? void 0 : account.toString()) || '') }));
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
    var ethereum = useMultichain().ethereum;
    var account = ethereum.account;
    return account ? (jsx("div", __assign({ className: styles$4.connectContainer }, { children: jsx("div", __assign({ className: styles$4.jazzicon }, { children: jsx(Identicon, {}) })) }))) : (jsx("button", __assign({ style: defaultStyle, className: styles$4.connectBtn, onClick: function () {
            setOpenOptions(true);
        } }, { children: "Connect Wallet" })));
};

var styles$3 = require("./walletlisting.module.css");
var WalletListing = function (_a) {
    _a.iconSrc; var heading = _a.heading, onWalletCall = _a.onWalletCall, _b = _a.isWhite, isWhite = _b === void 0 ? false : _b, _c = _a.noBottomBorder, noBottomBorder = _c === void 0 ? false : _c;
    return (jsxs("div", __assign({ style: noBottomBorder ? { borderBottom: "0" } : {}, className: styles$3.walletListingWrapper, onClick: onWalletCall }, { children: [isWhite && (jsx(Fragment, { children: jsx("div", { className: styles$3.walletIconBackground }) })), !isWhite && (jsx(Fragment, {})), jsx("h6", __assign({ className: styles$3.walletListingName }, { children: heading }))] })));
};

var styles$2 = require("./walletlist.module.css");
var DCBMetamask = require("../../assets/images/wallets/dcb-metamask-icon.svg");
var DCBWalletconnect = require("../../assets/images/wallets/dcb-walletconnect.svg");
// const DCBFortmatic = require("../../assets/images/wallets/dcb-fortmatic.svg");
var DCBCoinbase = require("../../assets/images/wallets/dcb-coinbase.png");
var EthWalletList = function (_a) {
    var EthWallets = _a.EthWallets;
    var ethereum = useMultichain().ethereum;
    var activateBrowserWallet = ethereum.activateBrowserWallet, activate = ethereum.activate, wallets = ethereum.wallets;
    var _b = useState(false), openMetamaskAllow = _b[0], setOpenMetamaskAllow = _b[1];
    useEffect(function () {
        detectEthereumProvider().then(function (provider) {
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
            if (isMobile) {
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
    return (jsxs("div", __assign({ className: styles$2.walletListWrapper }, { children: [EthWallets.metamask && (jsx(WalletListing, { isWhite: false, noBottomBorder: false, heading: "Metamask", iconSrc: DCBMetamask, onWalletCall: injectedHandle })), EthWallets.coinbase && (jsx(WalletListing, { isWhite: false, noBottomBorder: false, heading: "Coinbase", iconSrc: DCBCoinbase, onWalletCall: function () { return regHandle("Coinbase Wallet", wallets.Coinbase); } })), EthWallets.walletConnect && (jsx(WalletListing, { isWhite: false, noBottomBorder: true, heading: "WalletConnect", iconSrc: DCBWalletconnect, onWalletCall: function () {
                    return regHandle("Wallet Connect API", wallets.WalletConnect);
                } }))] })));
};

var styles$1 = require("./walletlist.module.css");
var SolWalletList = function (_a) {
    var SolWallets = _a.SolWallets;
    return (jsxs("div", __assign({ className: styles$1.walletListWrapper }, { children: [SolWallets.phantom && (
            // <WalletListing
            //   heading="Metamask"
            //   iconSrc={DCBMetamask}
            //   onWalletCall={injectedHandle}
            // />
            jsx(Fragment, {})), SolWallets.slope && (
            // <WalletListing
            //   heading="Coinbase"
            //   iconSrc={DCBCoinbase}
            //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
            // />
            jsx(Fragment, {})), SolWallets.solflare && (
            // <WalletListing
            //   heading="Fortmatic"
            //   iconSrc={DCBFortmatic}
            //   onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
            // />
            jsx(Fragment, {}))] })));
};

var styles = require("./connectwalletlist.module.css");
var ConnectWalletList = function (_a) {
    var openOptions = _a.openOptions, setOpenOptions = _a.setOpenOptions, EthWallets = _a.EthWallets, SolWallets = _a.SolWallets;
    return (jsxs(Fragment, { children: [jsx("div", __assign({ style: {
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
                } }, { children: jsx("div", __assign({ className: styles.menuDivision, style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }, onClick: function () { return setOpenOptions(false); } }, { children: jsxs("div", __assign({ style: { marginRight: 10 } }, { children: [jsx("p", { children: "Connect with one of the available wallet providers." }), jsx("br", {}), jsx(EthWalletList, { EthWallets: EthWallets }), jsx("br", {}), jsx(SolWalletList, { SolWallets: SolWallets })] })) })) })), openOptions && (jsx("div", { style: {
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 10000,
                    position: "fixed",
                    left: 0,
                }, onClick: function () { return setOpenOptions(false); } }))] }));
};

var ConnectWalletComponent = function () {
    var _a = useState(false), openOptions = _a[0], setOpenOptions = _a[1];
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
    return (jsxs(Fragment, { children: [jsx(index, { setOpenOptions: setOpenOptions }), openOptions ? (jsx(ConnectWalletList, { openOptions: openOptions, setOpenOptions: setOpenOptions, EthWallets: EthWallets, SolWallets: SolWallets })) : (jsx(Fragment, {}))] }));
};

export { ConnectWalletComponent };
//# sourceMappingURL=index.js.map
