import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMultichain } from '@cryptogate/react-providers';
import { useState, useEffect } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { isMobile } from 'react-device-detect';
import { utils } from 'ethers';
import { getWithExpiry, signEthMessage } from '@cryptogate/core';
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

var WalletInformation = function (_a) {
    var onClose = _a.onClose;
    var ethereum = useMultichain().ethereum;
    var getEthBalance = ethereum.getEthBalance, account = ethereum.account, deactivate = ethereum.deactivate;
    var etherBalance = getEthBalance(account);
    var handleDisconnect = function () {
        account && deactivate();
        onClose();
    };
    return (jsxs("div", __assign({ style: {
            display: "flex",
            placeContent: "space-between",
        } }, { children: [jsxs("div", { children: [jsx("p", { children: "Total Balance" }), jsxs("h5", { children: [etherBalance &&
                                account &&
                                utils.formatEther(etherBalance).slice(0, 7), " ", "ETH"] })] }), jsxs("div", __assign({ style: {
                    display: "flex",
                    placeContent: "center",
                } }, { children: [jsxs("p", __assign({ style: { color: "#c4c4c4" } }, { children: [account === null || account === void 0 ? void 0 : account.slice(0, 6), "...", account === null || account === void 0 ? void 0 : account.slice(-3)] })), jsx("p", __assign({ onClick: handleDisconnect }, { children: "Disconnect" }))] }))] })));
};

var ConnectMenu = function (_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen;
    return (jsxs("div", __assign({ style: {
            position: "fixed",
            top: "0",
            bottom: 0,
            left: 0,
            right: "0",
            zIndex: "1000",
            visibility: isOpen ? "visible" : "hidden",
        } }, { children: [jsx("div", { style: { width: "100%", height: "100%" }, onClick: function () {
                    onClose();
                } }), jsx("div", __assign({ style: {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 15px 15px rgba(0, 0, 0, 0.2)",
                    opacity: isOpen ? "1" : "0",
                    display: "block",
                    position: "absolute",
                    top: "80px",
                    right: "40px",
                    borderRadius: "10px",
                    border: "1px solid #666666",
                    boxSizing: "border-box",
                    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
                    transition: "all 0.2s ease-in-out",
                    height: "auto",
                    padding: "20px 20px 20px 20px",
                    width: "450px",
                } }, { children: jsx(WalletInformation, { onClose: onClose }) }))] })));
};

var defaultStyle = {
    backgroundColor: "#0d0d0d",
    color: "white",
    padding: "4px 10px",
    borderWidth: 1,
    borderRadius: "5px",
    height: "auto",
};
var index = function (_a) {
    var setOpenOptions = _a.setOpenOptions, onSign = _a.onSign, message = _a.message;
    var _b = useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var ethereum = useMultichain().ethereum;
    var account = ethereum.account, library = ethereum.library;
    useEffect(function () {
        if (account && library) {
            if (onSign) {
                var key = getWithExpiry("sig-".concat(account.toLowerCase()));
                if (key) {
                    onSign(key);
                }
                else {
                    signEthMessage(account, library, message).then(function (key) {
                        return onSign(key);
                    });
                }
            }
        }
    }, [account, library]);
    return account ? (jsxs(Fragment, { children: [jsx("div", __assign({ style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginRight: "15px",
                    cursor: "pointer",
                } }, { children: jsx("div", __assign({ style: {
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        height: "45px",
                        width: "46px",
                        paddingLeft: "0.05rem",
                        paddingTop: "0.03rem",
                    }, onClick: function () { return setOpenMenu(!openMenu); } }, { children: jsx(Identicon, {}) })) })), jsx(ConnectMenu, { onClose: function () {
                    setOpenMenu(false);
                }, isOpen: openMenu })] })) : (jsx("button", __assign({ style: defaultStyle, onClick: function () {
            setOpenOptions(true);
        } }, { children: "Connect Wallet" })));
};

var WalletListing = function (_a) {
    _a.iconSrc; var heading = _a.heading, onWalletCall = _a.onWalletCall, _b = _a.isWhite, isWhite = _b === void 0 ? false : _b, _c = _a.noBottomBorder, noBottomBorder = _c === void 0 ? false : _c;
    return (jsxs("div", __assign({ style: noBottomBorder
            ? {
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderBottom: "0",
                padding: "15px",
            }
            : {
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderBottom: "black 1px solid",
                padding: "15px",
            }, onClick: onWalletCall }, { children: [isWhite && (jsx(Fragment, { children: jsx("div", { style: {
                        backgroundColor: "black",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "15px",
                        position: "relative",
                        left: "-5px",
                    } }) })), !isWhite && (jsx(Fragment, {})), jsx("h6", __assign({ style: {
                    margin: "0",
                    padding: "0",
                    color: "black",
                    fontSize: "15px",
                } }, { children: heading }))] })));
};

var DCBMetamask = "";
var DCBWalletconnect = "";
var DCBCoinbase = "";
var EthWalletListComp = function (_a) {
    var EthWalletList = _a.EthWalletList;
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
    return (jsxs("div", __assign({ style: {
            border: "black 1px solid",
            borderRadius: "8px",
            marginBottom: "20px",
        } }, { children: [(EthWalletList.indexOf(EthWallets.all) > -1 ||
                EthWalletList.indexOf(EthWallets.metamask) > -1) && (jsx(WalletListing, { isWhite: false, noBottomBorder: EthWalletList.indexOf(EthWallets.metamask) ==
                    EthWalletList.length - 1
                    ? true
                    : false, heading: "Metamask", iconSrc: DCBMetamask, onWalletCall: injectedHandle })), (EthWalletList.indexOf(EthWallets.all) > -1 ||
                EthWalletList.indexOf(EthWallets.coinbase) > -1) && (jsx(WalletListing, { isWhite: false, noBottomBorder: EthWalletList.indexOf(EthWallets.coinbase) ==
                    EthWalletList.length - 1
                    ? true
                    : false, heading: "Coinbase", iconSrc: DCBCoinbase, onWalletCall: function () { return regHandle("Coinbase Wallet", wallets.Coinbase); } })), (EthWalletList.indexOf(EthWallets.all) > -1 ||
                EthWalletList.indexOf(EthWallets.walletConnect) > -1) && (jsx(WalletListing, { isWhite: false, noBottomBorder: EthWalletList.indexOf(EthWallets.all) > -1 ||
                    EthWalletList.indexOf(EthWallets.walletConnect) ==
                        EthWalletList.length - 1
                    ? true
                    : false, heading: "WalletConnect", iconSrc: DCBWalletconnect, onWalletCall: function () {
                    return regHandle("Wallet Connect API", wallets.WalletConnect);
                } }))] })));
};

var SolWalletList = function (_a) {
    var SolWalletList = _a.SolWalletList;
    return (jsxs("div", __assign({ style: {
            border: "black 1px solid",
            borderRadius: "8px",
            marginBottom: "20px",
        } }, { children: [(SolWalletList.indexOf(SolWallets.all) > -1 || SolWalletList.indexOf(SolWallets.phantom) > -1) && (
            // <WalletListing
            //   heading="Metamask"
            //   iconSrc={DCBMetamask}
            //   onWalletCall={injectedHandle}
            // />
            jsx(Fragment, {})), (SolWalletList.indexOf(SolWallets.all) > -1 || SolWalletList.indexOf(SolWallets.slope) > -1) && (
            // <WalletListing
            //   heading="Coinbase"
            //   iconSrc={DCBCoinbase}
            //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
            // />
            jsx(Fragment, {})), (SolWalletList.indexOf(SolWallets.all) > -1 || SolWalletList.indexOf(SolWallets.solflare) > -1) && (
            // <WalletListing
            //   heading="Fortmatic"
            //   iconSrc={DCBFortmatic}
            //   onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
            // />
            jsx(Fragment, {}))] })));
};

var ConnectWalletList = function (_a) {
    var openOptions = _a.openOptions, setOpenOptions = _a.setOpenOptions, EthWalletList = _a.EthWalletList, SolWalletList$1 = _a.SolWalletList;
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
                } }, { children: jsx("div", __assign({ style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        paddingTop: "10px",
                        maxHeight: "100%",
                        overflowY: "auto",
                    }, onClick: function () { return setOpenOptions(false); } }, { children: jsxs("div", __assign({ style: { marginRight: 10 } }, { children: [jsx("p", __assign({ style: {
                                    fontSize: "14px",
                                    color: "black",
                                } }, { children: "Connect with one of the available wallet providers." })), jsx("br", {}), EthWalletList.length > 0 && jsx(EthWalletListComp, { EthWalletList: EthWalletList }), jsx("br", {}), SolWalletList$1.length > 0 && jsx(SolWalletList, { SolWalletList: SolWalletList$1 })] })) })) })), openOptions && (jsx("div", { style: {
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 10000,
                    position: "fixed",
                    left: 0,
                }, onClick: function () { return setOpenOptions(false); } }))] }));
};

var EthWallets;
(function (EthWallets) {
    EthWallets["all"] = "all";
    EthWallets["metamask"] = "metamask";
    EthWallets["walletConnect"] = "walletConnect";
    EthWallets["coinbase"] = "coinbase";
})(EthWallets || (EthWallets = {}));
var SolWallets;
(function (SolWallets) {
    SolWallets["all"] = "all";
    SolWallets["phantom"] = "phantom";
    SolWallets["slope"] = "slope";
    SolWallets["solflare"] = "solflare";
})(SolWallets || (SolWallets = {}));
var ConnectWalletComponent = function (_a) {
    var _b = _a.message, message = _b === void 0 ? "This is the default message provided by Cryptogate when signing a message" : _b, onSign = _a.onSign, EthWalletList = _a.EthWalletList, SolWalletList = _a.SolWalletList;
    var _c = useState(false), openOptions = _c[0], setOpenOptions = _c[1];
    return (jsxs(Fragment, { children: [jsx(index, { setOpenOptions: setOpenOptions, message: message, onSign: onSign }), openOptions ? (jsx(ConnectWalletList, { openOptions: openOptions, setOpenOptions: setOpenOptions, EthWalletList: EthWalletList, SolWalletList: SolWalletList })) : (jsx(Fragment, {}))] }));
};

export { ConnectWalletComponent, EthWallets, SolWallets };
//# sourceMappingURL=index.js.map
