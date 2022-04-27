'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactProviders = require('@cryptogate/react-providers');
var react = require('react');
var Jazzicon = require('react-jazzicon');
var reactDeviceDetect = require('react-device-detect');
var ethers = require('ethers');
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Identicon = function () {
    var ethereum = reactProviders.useMultichain().ethereum;
    var account = ethereum.account;
    return (jsxRuntime.jsx(Jazzicon__default["default"], { diameter: reactDeviceDetect.isMobile ? 30 : 40, seed: Jazzicon.jsNumberForAddress((account === null || account === void 0 ? void 0 : account.toString()) || '') }));
};

var WalletInformation = function (_a) {
    var onClose = _a.onClose;
    var ethereum = reactProviders.useMultichain().ethereum;
    var getEthBalance = ethereum.getEthBalance, account = ethereum.account, deactivate = ethereum.deactivate;
    var etherBalance = getEthBalance(account);
    var handleDisconnect = function () {
        account && deactivate();
        onClose();
    };
    return (jsxRuntime.jsxs("div", __assign({ style: {
            display: "flex",
            placeContent: "space-between",
        } }, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", { children: "Total Balance" }), jsxRuntime.jsxs("h5", { children: [etherBalance &&
                                account &&
                                ethers.utils.formatEther(etherBalance).slice(0, 7), " ", "ETH"] })] }), jsxRuntime.jsxs("div", __assign({ style: {
                    display: "flex",
                    placeContent: "center",
                } }, { children: [jsxRuntime.jsxs("p", __assign({ style: { color: "#c4c4c4" } }, { children: [account === null || account === void 0 ? void 0 : account.slice(0, 6), "...", account === null || account === void 0 ? void 0 : account.slice(-3)] })), jsxRuntime.jsx("p", __assign({ onClick: handleDisconnect }, { children: "Disconnect" }))] }))] })));
};

var ConnectMenu = function (_a) {
    var onClose = _a.onClose, isOpen = _a.isOpen;
    return (jsxRuntime.jsxs("div", __assign({ style: {
            position: "fixed",
            top: "0",
            bottom: 0,
            left: 0,
            right: "0",
            zIndex: "1000",
            visibility: isOpen ? "visible" : "hidden",
        } }, { children: [jsxRuntime.jsx("div", { style: { width: "100%", height: "100%" }, onClick: function () {
                    onClose();
                } }), jsxRuntime.jsx("div", __assign({ style: {
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
                } }, { children: jsxRuntime.jsx(WalletInformation, { onClose: onClose }) }))] })));
};

var signMessage = function (_a) {
    var account = _a.account, provider = _a.provider, message = _a.message;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    if (!provider)
                        reject("No crypto wallet connected.");
                    var signer = provider.getSigner();
                    signer
                        .signMessage(message)
                        .then(function (signature) {
                        resolve({
                            message: message,
                            signature: signature,
                            address: account,
                        });
                    })
                        .catch(function (err) {
                        console.log(err.message);
                    });
                })];
        });
    });
};

var getWithExpiry = function (key) {
    var itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
        return null;
    }
    var item = JSON.parse(itemStr);
    var now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
};

var setWithExpiry = function (key, value, ttl) {
    var now = new Date();
    var item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

var defaultStyle = {
    backgroundColor: "#0d0d0d",
    color: "white",
    padding: "4px 10px",
    borderWidth: 1,
    borderRadius: "5px",
    height: "auto",
};
var signingMessage = function (key, account, provider, message) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                signMessage({
                    account: account,
                    provider: provider,
                    message: "".concat(message, ". Wallet address: ").concat(account, " ts-").concat(Date.now()),
                })
                    .then(function (sig) {
                    setWithExpiry("sig-".concat(account.toLowerCase()), sig, 43200000);
                    resolve(getWithExpiry("sig-".concat(account.toLowerCase())));
                })
                    .catch(function (e) {
                    reject(e);
                });
            })];
    });
}); };
var index = function (_a) {
    var setOpenOptions = _a.setOpenOptions, toSign = _a.toSign, onSign = _a.onSign;
    var _b = react.useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var ethereum = reactProviders.useMultichain().ethereum;
    var account = ethereum.account, library = ethereum.library;
    react.useEffect(function () {
        if (account && library) {
            if (toSign) {
                var key = getWithExpiry("sig-".concat(account.toLowerCase()));
                if (key) {
                    console.log(key);
                }
                else {
                    signingMessage(key, account, library, "Test Message").then(function (key) {
                        return onSign(key);
                    });
                }
            }
        }
    }, [account, library]);
    return account ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign({ style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginRight: "15px",
                    cursor: "pointer",
                } }, { children: jsxRuntime.jsx("div", __assign({ style: {
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        height: "45px",
                        width: "46px",
                        paddingLeft: "0.05rem",
                        paddingTop: "0.03rem",
                    }, onClick: function () { return setOpenMenu(!openMenu); } }, { children: jsxRuntime.jsx(Identicon, {}) })) })), jsxRuntime.jsx(ConnectMenu, { onClose: function () {
                    setOpenMenu(false);
                }, isOpen: openMenu })] })) : (jsxRuntime.jsx("button", __assign({ style: defaultStyle, onClick: function () {
            setOpenOptions(true);
        } }, { children: "Connect Wallet" })));
};

var WalletListing = function (_a) {
    _a.iconSrc; var heading = _a.heading, onWalletCall = _a.onWalletCall, _b = _a.isWhite, isWhite = _b === void 0 ? false : _b, _c = _a.noBottomBorder, noBottomBorder = _c === void 0 ? false : _c;
    return (jsxRuntime.jsxs("div", __assign({ style: noBottomBorder
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
            }, onClick: onWalletCall }, { children: [isWhite && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", { style: {
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
                    } }) })), !isWhite && (jsxRuntime.jsx(jsxRuntime.Fragment, {})), jsxRuntime.jsx("h6", __assign({ style: {
                    margin: "0",
                    padding: "0",
                    color: "black",
                    fontSize: "15px",
                } }, { children: heading }))] })));
};

var DCBMetamask = "";
var DCBWalletconnect = "";
var DCBCoinbase = "";
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
    return (jsxRuntime.jsxs("div", __assign({ style: {
            border: "black 1px solid",
            borderRadius: "8px",
            marginBottom: "20px",
        } }, { children: [EthWallets.metamask && (jsxRuntime.jsx(WalletListing, { isWhite: false, noBottomBorder: false, heading: "Metamask", iconSrc: DCBMetamask, onWalletCall: injectedHandle })), EthWallets.coinbase && (jsxRuntime.jsx(WalletListing, { isWhite: false, noBottomBorder: false, heading: "Coinbase", iconSrc: DCBCoinbase, onWalletCall: function () { return regHandle("Coinbase Wallet", wallets.Coinbase); } })), EthWallets.walletConnect && (jsxRuntime.jsx(WalletListing, { isWhite: false, noBottomBorder: true, heading: "WalletConnect", iconSrc: DCBWalletconnect, onWalletCall: function () {
                    return regHandle("Wallet Connect API", wallets.WalletConnect);
                } }))] })));
};

var SolWalletList = function (_a) {
    var SolWallets = _a.SolWallets;
    return (jsxRuntime.jsxs("div", __assign({ style: {
            border: "black 1px solid",
            borderRadius: "8px",
            marginBottom: "20px",
        } }, { children: [SolWallets.phantom && (
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
                } }, { children: jsxRuntime.jsx("div", __assign({ style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        paddingTop: "10px",
                        maxHeight: "100%",
                        overflowY: "auto",
                    }, onClick: function () { return setOpenOptions(false); } }, { children: jsxRuntime.jsxs("div", __assign({ style: { marginRight: 10 } }, { children: [jsxRuntime.jsx("p", __assign({ style: {
                                    fontSize: "14px",
                                    color: "black",
                                } }, { children: "Connect with one of the available wallet providers." })), jsxRuntime.jsx("br", {}), jsxRuntime.jsx(EthWalletList, { EthWallets: EthWallets }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx(SolWalletList, { SolWallets: SolWallets })] })) })) })), openOptions && (jsxRuntime.jsx("div", { style: {
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
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index, { setOpenOptions: setOpenOptions, toSign: true, onSign: function (key) { return console.log("This is from sign function: " + key); } }), openOptions ? (jsxRuntime.jsx(ConnectWalletList, { openOptions: openOptions, setOpenOptions: setOpenOptions, EthWallets: EthWallets, SolWallets: SolWallets })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}))] }));
};

exports.ConnectWalletComponent = ConnectWalletComponent;
//# sourceMappingURL=index.js.map
