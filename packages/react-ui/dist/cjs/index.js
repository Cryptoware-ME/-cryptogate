'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactProviders = require('@cryptogate/react-providers');
var Jazzicon = require('react-jazzicon');
var core = require('@cryptogate/core');
var BigNumber = require('bignumber.js');
var Slider = require('react-slick');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Jazzicon__default = /*#__PURE__*/_interopDefaultLegacy(Jazzicon);
var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);

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

var Identicon = function (_a) {
    var walletAddress = _a.walletAddress;
    var account = reactProviders.useEthereum().account;
    return (jsxRuntime.jsx(Jazzicon__default["default"], { diameter: 35, seed: Jazzicon.jsNumberForAddress(walletAddress ? walletAddress : (account === null || account === void 0 ? void 0 : account.toString()) || "") }));
};

var DisconnectBtn = function () {
    return (jsxRuntime.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 22 22" }, { children: jsxRuntime.jsxs("g", __assign({ id: "Group_3655", "data-name": "Group 3655", transform: "translate(-660.042 -514.38)" }, { children: [jsxRuntime.jsx("path", { id: "Path_12166", "data-name": "Path 12166", d: "M672.351,853.66a.974.974,0,0,0-1.378,0l-1.816,1.816a3.392,3.392,0,0,1-4.774.011l-.011-.012-.012-.011a3.388,3.388,0,0,1,.012-4.774l1.816-1.816a.974.974,0,0,0,0-1.378h0a.974.974,0,0,0-1.378,0l-1.816,1.816a5.34,5.34,0,0,0-.626,6.789l-2.039,2.039a.975.975,0,1,0,1.379,1.379l2.039-2.039a5.341,5.341,0,0,0,6.789-.626l1.816-1.816a.974.974,0,0,0,0-1.378Z", transform: "translate(0 -323.424)", fill: "#000", opacity: "50%" }), jsxRuntime.jsx("path", { id: "Path_12167", "data-name": "Path 12167", d: "M742.855,514.666a.975.975,0,0,0-1.379,0l-2.04,2.04a5.343,5.343,0,0,0-6.791.625l-3.587,3.589-4.476-4.476a.975.975,0,1,0-1.379,1.379L739.7,534.317a.975.975,0,0,0,1.379-1.379l-4.476-4.476,3.587-3.587a5.343,5.343,0,0,0,.627-6.79l2.041-2.041A.975.975,0,0,0,742.855,514.666ZM738.81,523.5l-3.588,3.588-4.785-4.785,3.587-3.587a3.387,3.387,0,0,1,4.774-.012l.011.012.011.011A3.386,3.386,0,0,1,738.81,523.5Z", transform: "translate(-61.098)", fill: "#000", opacity: "50%" })] })) })));
};

var WalletInformation = function (_a) {
    var onDisconnect = _a.onDisconnect, _b = _a.direction, direction = _b === void 0 ? "y" : _b;
    var _c = reactProviders.useEthereum(), account = _c.account, deactivate = _c.deactivate, ethBalance = _c.ethBalance, ens = _c.ens;
    var handleDisconnect = function () {
        account && deactivate();
        onDisconnect();
    };
    return (jsxRuntime.jsxs("div", __assign({ style: {
            display: "flex",
            flexDirection: direction == "y" ? "column" : "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
        } }, { children: [jsxRuntime.jsxs("div", __assign({ style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                } }, { children: [account && ens && (jsxRuntime.jsxs("div", __assign({ style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        } }, { children: [jsxRuntime.jsxs("p", __assign({ style: {
                                    color: "#323232",
                                    margin: "0 10px 0 0",
                                    opacity: "50%",
                                    lineHeight: 1,
                                } }, { children: [account === null || account === void 0 ? void 0 : account.slice(0, 6), "...", account === null || account === void 0 ? void 0 : account.slice(-3)] })), jsxRuntime.jsx("p", __assign({ style: {
                                    color: "#000",
                                    lineHeight: 0,
                                    opacity: "50%",
                                } }, { children: ens ? ens : "" }))] }))), account && !ens && (jsxRuntime.jsxs("p", __assign({ style: {
                            color: "#000",
                            margin: "0 10px 0 0",
                            opacity: "50%",
                            lineHeight: 1,
                        } }, { children: [account === null || account === void 0 ? void 0 : account.slice(0, 6), "...", account === null || account === void 0 ? void 0 : account.slice(-3)] }))), jsxRuntime.jsx("span", __assign({ style: {
                            marginLeft: "10px",
                            cursor: "pointer",
                            height: "22px",
                            width: "22px",
                        } }, { children: jsxRuntime.jsx("span", __assign({ onClick: handleDisconnect }, { children: jsxRuntime.jsx(DisconnectBtn, {}) })) })), jsxRuntime.jsx("span", __assign({ style: {
                            display: direction == "x" ? "flex" : "none",
                            margin: "0 0 0 4vw",
                        } }, { children: jsxRuntime.jsx(Identicon, {}) }))] })), direction == "y" && (jsxRuntime.jsx("hr", { style: { width: "100%", marginBottom: "2vh" } })), jsxRuntime.jsxs("div", __assign({ style: {
                    marginRight: direction == "x" ? "10vw" : "0",
                    padding: 0,
                } }, { children: [jsxRuntime.jsx("p", __assign({ style: { margin: 0, color: "#000" } }, { children: "Total Balance" })), jsxRuntime.jsxs("p", __assign({ style: {
                            fontWeight: "bold",
                            margin: 0,
                            color: "#000",
                        } }, { children: [account && ethBalance && ethBalance.slice(0, 7), "ETH"] }))] }))] })));
};

var useTokensMultiCall = function (_a) {
    var tokenList = _a.tokenList, method = _a.method; _a.format; var _c = _a.args, args = _c === void 0 ? [] : _c;
    return reactProviders.readContractCalls(tokenList
        ? tokenList.map(function (token) { return ({
            abi: core.ERC20,
            address: token,
            method: method,
            args: args,
        }); })
        : []);
};

var toDecimals = function (_a) {
    var number = _a.number, _b = _a.precision, precision = _b === void 0 ? 0 : _b, _c = _a.tokenDecimals, tokenDecimals = _c === void 0 ? 0 : _c;
    if (number._hex == "0x00")
        return 0;
    var decimals = new BigNumber__default["default"](10).exponentiatedBy(tokenDecimals);
    if (precision === 0) {
        return new BigNumber__default["default"](number._hex).dividedBy(decimals).toNumber();
    }
    var res = new BigNumber__default["default"](number._hex).dividedBy(decimals).toString().split(".");
    return Number(res[0] + "." + res[1].slice(0, precision));
};
var convertResultToReadableFormat = function (result) {
    return result.map(function (e) {
        return e
            ? e.toString()
            : 0;
    });
};
var isUriIPFS = function (uri) {
    var uriSplit = uri.split(":");
    return uriSplit[0] === "ipfs" ? uriSplit[1].slice(2) : false;
};
var imageURI = function (uri) {
    var uriSplit = uri.split(":");
    return uriSplit[0] === "ipfs"
        ? "https://gateway.ipfs.io/ipfs/".concat(uriSplit[1].slice(2))
        : uri;
};
var areAllElementsValid = function (arr) {
    return arr.every(function (element) { return element !== undefined && element !== null; });
};

var TOKEN_CONTRACT_METHODS = {
    BALANCE_OF: "balanceOf",
    SYMBOL: "symbol",
    DECIMALS: "decimals",
};
var NFT_CONTRACT_METHODS = {
    BALANCE_OF: "balanceOf",
    SYMBOL: "symbol",
    TOKEN_URI: "tokenURI",
    TOKEN_OF_OWNER_BY_INDEX: "tokenOfOwnerByIndex",
};
var build_slider_settings = function (_a) {
    var _b = _a.rows, rows = _b === void 0 ? 1 : _b;
    return ({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: rows,
    });
};

var index$4 = function (_a) {
    var tokens = _a.tokens;
    var account = reactProviders.useEthereum().account;
    var balance = useTokensMultiCall({
        tokenList: tokens,
        method: TOKEN_CONTRACT_METHODS.BALANCE_OF,
        format: true,
        args: [account],
    });
    var symbol = useTokensMultiCall({
        tokenList: tokens,
        method: TOKEN_CONTRACT_METHODS.SYMBOL,
    });
    var decimals = useTokensMultiCall({
        tokenList: tokens,
        method: TOKEN_CONTRACT_METHODS.DECIMALS,
    });
    return (jsxRuntime.jsxs("div", __assign({ style: { display: "flex", flexDirection: "column" } }, { children: [jsxRuntime.jsx("p", __assign({ style: {
                    fontWeight: "bold",
                    lineHeight: 0,
                    color: "#000",
                } }, { children: "TOKENS" })), jsxRuntime.jsx("div", __assign({ className: "tokenDetailsContainer" }, { children: balance &&
                    symbol &&
                    decimals &&
                    balance.map(function (e, index) { return (jsxRuntime.jsx("div", { children: e && (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", __assign({ style: {
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "1vh 0",
                                } }, { children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", __assign({ style: {
                                                margin: 0,
                                                fontWeight: "500",
                                                color: "#000",
                                            } }, { children: symbol[index] })), jsxRuntime.jsx("p", __assign({ style: { margin: 0, color: "#323232" } }, { children: toDecimals({
                                                number: e,
                                                precision: 5,
                                                tokenDecimals: decimals[index],
                                            }) }))] }) })) })) }, "token-mainlist-".concat(index))); }) }))] })));
};

var useNFTMetadataMultiCall = function (_a) {
    var NFTs = _a.NFTs, method = _a.method, _b = _a.format, format = _b === void 0 ? false : _b, _c = _a.args, args = _c === void 0 ? [] : _c;
    var result = reactProviders.readContractCalls(NFTs
        ? NFTs.map(function (nft) { return ({
            abi: core.IERC721Metadata,
            address: nft,
            method: method,
            args: args,
        }); })
        : []);
    return result && format ? convertResultToReadableFormat(result) : result;
};
var useTokenURIIndexCover = function (_a) {
    var NFTs = _a.NFTs;
    return reactProviders.readContractCalls(NFTs.map(function (nft) { return ({
        abi: core.ERC721,
        address: nft,
        method: NFT_CONTRACT_METHODS.TOKEN_URI,
        args: [1],
    }); }));
};

var index$3 = function (_a) {
    var URI = _a.URI, number = _a.number, symbol = _a.symbol;
    var _b = React.useState(""), image = _b[0], setImg = _b[1];
    var _c = React.useState(false), empty = _c[0], setEmpty = _c[1];
    React.useEffect(function () {
        if (URI) {
            var validURI = isUriIPFS(URI);
            if (validURI) {
                var newURI = "https://gateway.ipfs.io/ipfs/".concat(validURI);
                fetch(newURI)
                    .then(function (d) {
                    return d.json();
                })
                    .then(function (d) {
                    setImg(imageURI(d.image));
                })
                    .catch(function (e) {
                    console.log(e);
                    setEmpty(true);
                });
            }
            else {
                fetch(URI[0])
                    .then(function (d) {
                    return d.json();
                })
                    .then(function (d) {
                    setImg(imageURI(d.image));
                })
                    .catch(function (e) {
                    console.log(e);
                    setEmpty(true);
                });
            }
        }
    }, [URI]);
    return (jsxRuntime.jsxs("div", __assign({ style: {
            borderRadius: "10px",
            border: "1px solid black",
        } }, { children: [jsxRuntime.jsxs("div", __assign({ style: {
                    overflow: "hidden",
                    borderRadius: "10px 10px 0px 0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                } }, { children: [empty && (jsxRuntime.jsx("img", { alt: "".concat(symbol, "-").concat(number), src: "https://airnfts.s3.amazonaws.com/nft-images/20211121/Blur_1637529258562.png", width: "100%" })), !empty && image && (jsxRuntime.jsx("img", { alt: "".concat(symbol, "-").concat(number), src: image, width: "100%" }))] })), jsxRuntime.jsxs("div", __assign({ style: {
                    display: "flex",
                    backgroundColor: "#666666",
                    borderRadius: "0px 0px 10px 10px",
                    color: "white",
                    padding: "1px 1vw",
                } }, { children: [jsxRuntime.jsx("div", __assign({ style: { marginRight: "2vw" } }, { children: symbol })), number && jsxRuntime.jsx("div", { children: number })] }))] })));
};

var index$2 = function (_a) {
    var URIs = _a.URIs, symbols = _a.symbols, numbers = _a.numbers, onCollectionSelected = _a.onCollectionSelected;
    return (jsxRuntime.jsx("div", __assign({ style: {
            minWidth: "300px",
            maxWidth: "300px",
            padding: "1vh 25px 0 25px",
        } }, { children: URIs.length > 0 ? (jsxRuntime.jsx(Slider__default["default"], __assign({}, build_slider_settings({}), { children: URIs.map(function (uri, index) {
                return (jsxRuntime.jsx("div", __assign({ onClick: function () {
                        onCollectionSelected(index);
                    } }, { children: jsxRuntime.jsx(index$3, { URI: uri, number: numbers[index], symbol: Array.isArray(symbols) ? symbols[index] : symbols }, index) }), "".concat(Array.isArray(symbols) ? symbols[index] : symbols, "-").concat(numbers[index])));
            }) }))) : (jsxRuntime.jsxs("div", __assign({ style: {
                textAlign: "center",
                display: "flex",
                alignItems: "center",
            } }, { children: [jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), "Oops..", jsxRuntime.jsx("br", {}), "There's nothing to show here"] }))) })));
};

// import NFTCollection from "./NFTCollection";
var index$1 = function (_a) {
    var NFTs = _a.NFTs;
    var _b = React.useState(-1), clicked = _b[0]; _b[1];
    var account = reactProviders.useEthereum().account;
    var balances = useNFTMetadataMultiCall({
        NFTs: NFTs,
        method: NFT_CONTRACT_METHODS.BALANCE_OF,
        format: true,
        args: [account],
    });
    var symbols = useNFTMetadataMultiCall({
        NFTs: NFTs,
        method: NFT_CONTRACT_METHODS.SYMBOL,
    });
    var URIs = useTokenURIIndexCover({ NFTs: NFTs });
    return (jsxRuntime.jsx("div", __assign({ style: {
            display: "flex",
            flexDirection: "column",
        } }, { children: clicked == -1 &&
            areAllElementsValid(URIs) &&
            areAllElementsValid(balances) && (jsxRuntime.jsx(index$2, { symbols: symbols, URIs: URIs, numbers: balances, onCollectionSelected: function () { } })) })));
};

var index = function (_a) {
    var onDisconnect = _a.onDisconnect, Store = _a.Store;
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(WalletInformation, { onDisconnect: onDisconnect, direction: "x" }), Store && (Store.Tokens || Store.NFTs) && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("hr", { style: {
                            width: "100%",
                            borderTop: 0,
                            borderBottom: "1px solid #000",
                        } }), jsxRuntime.jsxs("div", __assign({ style: {
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "felx-start",
                            maxHeight: "320px",
                        } }, { children: [Store.Tokens && Store.Tokens.length > 0 && (jsxRuntime.jsx(index$4, { tokens: Store.Tokens })), Store.Tokens &&
                                Store.Tokens.length &&
                                Store.NFTs &&
                                Store.NFTs.length && (jsxRuntime.jsx("div", { style: {
                                    borderLeft: "1px solid #ffffff",
                                    margin: "0 2vw 0 2vw",
                                } })), Store.NFTs && Store.NFTs.length > 0 && (jsxRuntime.jsx(index$1, { NFTs: Store.NFTs }))] }))] }))] }));
};

var ConnectedMenu = function (_a) {
    var ChosenConnectedMenu = _a.ChosenConnectedMenu, onClose = _a.onClose, _b = _a.onDisconnect, onDisconnect = _b === void 0 ? function () { } : _b, isOpen = _a.isOpen, Store = _a.Store;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [ChosenConnectedMenu == exports.ConnectedMenuOptions.NOMENU && jsxRuntime.jsx(jsxRuntime.Fragment, {}), ChosenConnectedMenu != exports.ConnectedMenuOptions.NOMENU && (jsxRuntime.jsxs("div", __assign({ style: {
                    position: "fixed",
                    top: "0",
                    bottom: 0,
                    left: 0,
                    right: "0",
                    zIndex: "1000",
                    visibility: isOpen ? "visible" : "hidden",
                } }, { children: [jsxRuntime.jsx("div", { style: { width: "100%", height: "100%" }, onClick: function () {
                            onClose();
                        } }), jsxRuntime.jsxs("div", __assign({ style: {
                            backgroundColor: "#fff",
                            boxShadow: "0 15px 15px rgba(0, 0, 0, 0.2)",
                            opacity: isOpen ? "1" : "0",
                            display: "block",
                            position: "absolute",
                            top: "80px",
                            right: "40px",
                            borderRadius: "20px",
                            border: "1px solid  #fff",
                            boxSizing: "border-box",
                            transform: isOpen ? "translateY(0)" : "translateY(-100%)",
                            transition: "all 0.2s ease-in-out",
                            height: "auto",
                            padding: "20px 20px 20px 20px",
                            width: "auto",
                        } }, { children: [ChosenConnectedMenu == exports.ConnectedMenuOptions.WALLETINFORMATION && (jsxRuntime.jsx(WalletInformation, { onDisconnect: onDisconnect })), ChosenConnectedMenu == exports.ConnectedMenuOptions.STORE && (jsxRuntime.jsx(index, { onDisconnect: onDisconnect, Store: Store }))] }))] })))] }));
};

var setWithExpiry = function (key, value, ttl) {
    var now = new Date();
    var item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
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

var signingMessage = function (account, provider, SignatureMessage) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                core.ethSignMessage({
                    account: account,
                    provider: provider,
                    message: SignatureMessage + "Wallet Address: " + account,
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
var ConnectWalletButton = function (_a) {
    var ActiveComponent = _a.ActiveComponent, DisabledComponent = _a.DisabledComponent, ConnectedComponent = _a.ConnectedComponent, SignatureMessage = _a.SignatureMessage, NetworkChainIds = _a.NetworkChainIds, NetworkAlertMessage = _a.NetworkAlertMessage, ChosenConnectedMenu = _a.ChosenConnectedMenu, onSign = _a.onSign, Store = _a.Store, setOpenOptions = _a.setOpenOptions;
    var _b = React__default["default"].useState(false), openMenu = _b[0], setOpenMenu = _b[1];
    var _c = React__default["default"].useState(null), keyValue = _c[0], setKeyValue = _c[1];
    var _d = reactProviders.useEthereum(), account = _d.account, network = _d.network, provider = _d.provider, deactivate = _d.deactivate;
    React__default["default"].useEffect(function () {
        if (account && provider) {
            if (NetworkChainIds.length == 0 ||
                (NetworkChainIds.length > 0 &&
                    (network.chainId
                        ? NetworkChainIds.includes(Number(network.chainId))
                        : false))) {
                if (onSign) {
                    var key = getWithExpiry("sig-".concat(account === null || account === void 0 ? void 0 : account.toLowerCase()));
                    if (key) {
                        setKeyValue(key);
                        onSign(key);
                    }
                    else {
                        signingMessage(account, provider, SignatureMessage).then(function (key) {
                            setKeyValue(key);
                            onSign(key);
                        });
                    }
                }
                else {
                    setKeyValue({ address: account });
                }
            }
            else {
                alert(NetworkAlertMessage);
                deactivate();
            }
        }
    }, [account, provider]);
    return account ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [keyValue ? (jsxRuntime.jsx("div", __assign({ onClick: function () { return setOpenMenu(!openMenu); } }, { children: ConnectedComponent }))) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: DisabledComponent })), jsxRuntime.jsx(ConnectedMenu, { ChosenConnectedMenu: ChosenConnectedMenu, Store: Store, onClose: function () {
                    setOpenMenu(false);
                }, isOpen: openMenu })] })) : (jsxRuntime.jsx("div", __assign({ onClick: function () {
            setOpenOptions(true);
        } }, { children: ActiveComponent })));
};

var WalletListing = function (_a) {
    var iconSrc = _a.iconSrc, heading = _a.heading, onWalletCall = _a.onWalletCall;
    return (jsxRuntime.jsxs("div", __assign({ style: {
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "black 1px solid",
            padding: "15px",
        }, onClick: onWalletCall }, { children: [jsxRuntime.jsx("span", __assign({ style: { paddingRight: "15px" } }, { children: jsxRuntime.jsx("img", { src: iconSrc, alt: heading, width: "25px", height: "25px" }) })), jsxRuntime.jsx("h6", __assign({ style: {
                    margin: "0",
                    padding: "0",
                    color: "black",
                    fontSize: "15px",
                } }, { children: heading }))] })));
};

var EthWalletListComp = function (_a) {
    var EthWalletList = _a.EthWalletList;
    var _b = reactProviders.useEthereum(), activateBraveWallet = _b.activateBraveWallet, activateMetamaskWallet = _b.activateMetamaskWallet, activateCoinbaseWallet = _b.activateCoinbaseWallet, activateWalletConnect = _b.activateWalletConnect;
    return (jsxRuntime.jsxs("div", __assign({ style: {
            borderLeft: "black 1px solid",
            borderTop: "black 1px solid",
            borderRight: "black 1px solid",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            marginBottom: "20px",
        } }, { children: [(EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.METAMASK) > -1) && (jsxRuntime.jsx(WalletListing, { heading: "Metamask", iconSrc: "/imgs/meta-mask.png", onWalletCall: activateMetamaskWallet })), (EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.BRAVEWALLET) > -1) && (jsxRuntime.jsx(WalletListing, { heading: "Brave Wallet", iconSrc: "/imgs/brave-wallet.png", onWalletCall: activateBraveWallet })), (EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.COINBASE) > -1) && (jsxRuntime.jsx(WalletListing, { heading: "Coinbase Wallet", iconSrc: "/imgs/coinbase.jpg", onWalletCall: activateCoinbaseWallet })), (EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.WALLETCONNECT) > -1) && (jsxRuntime.jsx(WalletListing, { heading: "Wallet Connect", iconSrc: "/imgs/trustwallet.png", onWalletCall: activateWalletConnect }))] })));
};

var ConnectWalletList = function (_a) {
    var openOptions = _a.openOptions, setOpenOptions = _a.setOpenOptions, EthWalletList = _a.EthWalletList;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign({ style: {
                    width: 270,
                    top: 0,
                    backgroundColor: "white",
                    transition: "0.5s",
                    zIndex: 10001,
                    position: "fixed",
                    right: !openOptions ? -270 : 0,
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
                                } }, { children: "Connect with one of the available wallet providers." })), jsxRuntime.jsx("br", {}), EthWalletList.length > 0 && (jsxRuntime.jsx(EthWalletListComp, { EthWalletList: EthWalletList }))] })) })) })), openOptions && (jsxRuntime.jsx("div", { style: {
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 10000,
                    position: "fixed",
                    left: 0,
                }, onClick: function () { return setOpenOptions(false); } }))] }));
};

var Active = function () {
    var _a = React.useState(false), isHovering = _a[0], setIsHovering = _a[1];
    var handleMouseEnter = function () {
        setIsHovering(true);
    };
    var handleMouseLeave = function () {
        setIsHovering(false);
    };
    return (jsxRuntime.jsx("button", __assign({ style: {
            background: isHovering ? "#000000" : "transparent",
            color: isHovering ? "#ffffff" : "#000000",
            borderRadius: "5px",
            padding: "1vh 2vw",
            cursor: isHovering ? "pointer" : "",
        }, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, { children: "Connect Wallet" })));
};

var Disabled = function () {
    return (jsxRuntime.jsx("button", __assign({ disabled: true, style: {
            background: "transparent",
            color: "#c4c4c4",
            borderColor: "#c4c4c4",
            borderRadius: "5px",
            padding: "1vh 2vw",
        } }, { children: "Connect Wallet" })));
};

var defaults = {
    NetworkChainIds: [reactProviders.ChainId.Mainnet],
    ConnectWalletButtonText: "Connect Wallet",
    SignatureMessage: "This is the default signaure message provided by Cryptogate.",
    NetworkAlertMessage: "Selected network is not supported.",
};

exports.EthWallets = void 0;
(function (EthWallets) {
    EthWallets["ALL"] = "all";
    EthWallets["METAMASK"] = "metamask";
    EthWallets["WALLETCONNECT"] = "walletconnect";
    EthWallets["COINBASE"] = "coinbase";
    EthWallets["BRAVEWALLET"] = "braveWallet";
})(exports.EthWallets || (exports.EthWallets = {}));
exports.ConnectedMenuOptions = void 0;
(function (ConnectedMenuOptions) {
    ConnectedMenuOptions["NOMENU"] = "nomenu";
    ConnectedMenuOptions["WALLETINFORMATION"] = "walletinformation";
    ConnectedMenuOptions["STORE"] = "store";
})(exports.ConnectedMenuOptions || (exports.ConnectedMenuOptions = {}));
var ConnectWalletComponent = function (_a) {
    var _b = _a.ActiveComponent, ActiveComponent = _b === void 0 ? jsxRuntime.jsx(Active, {}) : _b, _c = _a.DisabledComponent, DisabledComponent = _c === void 0 ? jsxRuntime.jsx(Disabled, {}) : _c, _d = _a.ConnectedComponent, ConnectedComponent = _d === void 0 ? jsxRuntime.jsx(Identicon, {}) : _d, _e = _a.EthWalletList, EthWalletList = _e === void 0 ? [exports.EthWallets.ALL] : _e, _f = _a.SignatureMessage, SignatureMessage = _f === void 0 ? defaults.SignatureMessage : _f, _g = _a.NetworkChainIds, NetworkChainIds = _g === void 0 ? defaults.NetworkChainIds : _g, _h = _a.NetworkAlertMessage, NetworkAlertMessage = _h === void 0 ? defaults.NetworkAlertMessage : _h, _j = _a.ConnectedMenuChosen, ConnectedMenuChosen = _j === void 0 ? exports.ConnectedMenuOptions.WALLETINFORMATION : _j, _k = _a.Store, Store = _k === void 0 ? {} : _k, onSign = _a.onSign;
    var _l = React__default["default"].useState(false), openOptions = _l[0], setOpenOptions = _l[1];
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ConnectWalletButton, { ActiveComponent: ActiveComponent, DisabledComponent: DisabledComponent, ConnectedComponent: ConnectedComponent, NetworkChainIds: NetworkChainIds, setOpenOptions: setOpenOptions, NetworkAlertMessage: NetworkAlertMessage, SignatureMessage: SignatureMessage, onSign: onSign, ChosenConnectedMenu: ConnectedMenuChosen, Store: Store }), openOptions ? (jsxRuntime.jsx(ConnectWalletList, { openOptions: openOptions, setOpenOptions: setOpenOptions, EthWalletList: EthWalletList })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}))] }));
};

var Loader = function () {
    return jsxRuntime.jsx("div", { className: "loader" });
};

var ReadMethodComponent = function (_a) {
    var method = _a.method, contractObj = _a.contractObj;
    var _b = React__default["default"].useState(), args = _b[0], setArgs = _b[1];
    var _c = React__default["default"].useState(false), enabled = _c[0], setEnabled = _c[1];
    var _d = React__default["default"].useState(false), loading = _d[0], setLoading = _d[1];
    var _e = reactProviders.readContractCall({
        address: contractObj.address,
        abi: contractObj.abi,
        method: method.name,
        args: args,
        enabled: enabled,
    }), response = _e.response, error = _e.error;
    React__default["default"].useEffect(function () {
        if (response || error)
            setLoading(false);
    }, [response, error]);
    var queryContract = function (e, method) { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            e.preventDefault();
            setLoading(true);
            args = [];
            if (method.inputs && method.inputs.length) {
                method.inputs.map(function (input) {
                    var _a;
                    return args.push((_a = document.getElementById(method.name + "-" + input.name)) === null || _a === void 0 ? void 0 : _a.value);
                });
                setEnabled(true);
                setArgs(args);
            }
            else {
                setEnabled(true);
                setArgs([]);
            }
            return [2 /*return*/];
        });
    }); };
    return (jsxRuntime.jsxs("form", __assign({ method: "POST", onSubmit: function (e) { return queryContract(e, method); }, className: "methodComponent" }, { children: [jsxRuntime.jsx("h1", { children: method.name }), method.inputs &&
                method.inputs.map(function (input, index) { return (jsxRuntime.jsx("input", { id: "".concat(method.name, "-").concat(input.name), placeholder: input.name, required: true }, index)); }), jsxRuntime.jsx("button", __assign({ type: "submit" }, { children: "Query" })), " ", jsxRuntime.jsx("br", {}), " ", jsxRuntime.jsx("br", {}), loading && jsxRuntime.jsx(Loader, {}), !loading && response, !loading && (jsxRuntime.jsx("span", __assign({ className: "error" }, { children: error && error.toString() })))] })));
};

var WriteMethodComponent = function (_a) {
    var method = _a.method, contractObj = _a.contractObj;
    var _b = React__default["default"].useState(false), isLoading = _b[0], setLoading = _b[1];
    var _c = reactProviders.writeContractCall({
        address: contractObj.address,
        abi: contractObj.abi,
        method: method.name,
    }), send = _c.send; _c.loading; var error = _c.error, response = _c.response;
    React__default["default"].useEffect(function () {
        if (response || error)
            setLoading(false);
    }, [response, error]);
    var extractErrorMessage = function (msg) {
        if (msg.startsWith("sending a transaction requires a signer"))
            return "Authentication error: Connect wallet to send a transaction";
        else if (msg.includes("Ownable: caller is not the owner"))
            return "Authorization error: Function can only be called by contract owner";
        else
            return msg;
    };
    var queryContract = function (e, method) { return __awaiter(void 0, void 0, void 0, function () {
        var args;
        return __generator(this, function (_a) {
            e.preventDefault();
            setLoading(true);
            args = [];
            if (method.inputs && method.inputs.length) {
                method.inputs.map(function (input) {
                    var _a;
                    return args.push((_a = document.getElementById(method.name + "-" + input.name)) === null || _a === void 0 ? void 0 : _a.value);
                });
            }
            send(args);
            return [2 /*return*/];
        });
    }); };
    return (jsxRuntime.jsxs("form", __assign({ method: "POST", onSubmit: function (e) { return queryContract(e, method); }, className: "methodComponent" }, { children: [jsxRuntime.jsx("h1", { children: method.name }), method.inputs &&
                method.inputs.map(function (input, index) { return (jsxRuntime.jsx("input", { id: "".concat(method.name, "-").concat(input.name), placeholder: input.name, required: true }, index)); }), jsxRuntime.jsx("button", __assign({ type: "submit" }, { children: "Query" })), " ", jsxRuntime.jsx("br", {}), " ", jsxRuntime.jsx("br", {}), isLoading && jsxRuntime.jsx(Loader, {}), response, !isLoading && (jsxRuntime.jsx("span", __assign({ className: "error" }, { children: error && extractErrorMessage(error.message.toString()) })))] })));
};

var styles = ".radioToolbar {\r\n  margin: 20px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.radioToolbar input[type=\"radio\"] {\r\n  opacity: 0;\r\n  position: fixed;\r\n  width: 0;\r\n}\r\n\r\n.radioToolbar label {\r\n  display: inline-block;\r\n  background-color: #e7e0ec;\r\n  padding: 10px 20px;\r\n  font-family: sans-serif, Arial;\r\n  font-size: 16px;\r\n  border: 2px solid transparent;\r\n  border-radius: 4px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.radioToolbar label:hover {\r\n  cursor: pointer;\r\n  border-color: #6750a4;\r\n}\r\n\r\n.radioToolbar input[type=\"radio\"]:focus + label {\r\n  border: 2px solid transparent;\r\n}\r\n\r\n.radioToolbar input[type=\"radio\"]:checked + label {\r\n  background-color: #ab92ec;\r\n  border-color: #6750a4;\r\n}\r\n\r\n.searchBar {\r\n  padding: 10px 20px;\r\n  outline: none;\r\n  border: 2px solid transparent;\r\n  border-bottom: 2px solid #6750a4;\r\n  background-color: #e7e0ec;\r\n}\r\n\r\n.searchBar:focus {\r\n  border: 2px solid #6750a4;\r\n}\r\n";

var AbiToUi = function (_a) {
    var contract = _a.contract, address = _a.address, abi = _a.abi;
    var _b = React__default["default"].useState(), contractObj = _b[0], setContractObj = _b[1];
    var _c = React__default["default"].useState(0), type = _c[0], setType = _c[1];
    var _d = React__default["default"].useState(""), searched = _d[0], setSearched = _d[1];
    var network = reactProviders.useEthereum().network;
    var config = reactProviders.useConfig();
    var getAbiFromEtherscan = function (contractAddrss) { return __awaiter(void 0, void 0, void 0, function () {
        var res, response, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch("https://api.etherscan.io/api?module=contract&action=getabi&address=" +
                        contractAddrss +
                        "&apikey=9KQ18R3W737H1R2S37HZIEDPWT6RIJJ9I8", { method: "GET" })];
                case 1:
                    res = _c.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    response = _c.sent();
                    if (response.status != "1")
                        return [2 /*return*/, null];
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, response.result];
                case 3: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
            }
        });
    }); };
    var handleSearch = function (e) {
        setSearched(e.target.value);
    };
    React__default["default"].useEffect(function () {
        var _a, _b;
        if (contract && config && network) {
            var _contractObj = (_b = (_a = config === null || config === void 0 ? void 0 : config.ethConfig) === null || _a === void 0 ? void 0 : _a.contractList) === null || _b === void 0 ? void 0 : _b.filter(function (item, i) { return item.name == contract; });
            if (_contractObj && _contractObj.length) {
                var res = Object.keys(_contractObj[0].addresses).filter(function (key, i) { return key == network.chainId.toString(); });
                setContractObj({
                    address: _contractObj[0].addresses[Number(res[0])],
                    abi: _contractObj[0].abi,
                });
            }
        }
        else if (address && abi)
            setContractObj({ address: address, abi: abi });
        else if (address) {
            getAbiFromEtherscan(address).then(function (abi) {
                if (abi)
                    setContractObj({ address: address, abi: abi });
                else
                    console.error("Failed to retrieve contract abi from etherscan. Verify your code to make it retrievable");
            });
        }
        else
            console.error("Insufficient data");
    }, [network, config]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: contractObj && contractObj.abi && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("form", __assign({ className: styles.radioToolbar }, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("input", { type: "radio", id: "read", name: "type", defaultChecked: true, onChange: function (e) { return setType(0); } }), jsxRuntime.jsx("label", __assign({ htmlFor: "read" }, { children: "Read" })), jsxRuntime.jsx("input", { type: "radio", id: "write", name: "type", onChange: function (e) { return setType(1); } }), jsxRuntime.jsx("label", __assign({ htmlFor: "write" }, { children: "Write" }))] }), jsxRuntime.jsx("input", { type: "text", placeholder: "Search...", className: styles.searchBar, onChange: handleSearch })] })), type == 0 &&
                    contractObj.abi
                        .filter(function (item) {
                        return item.type == "function" &&
                            item.stateMutability == "view" &&
                            item.name.includes(searched);
                    })
                        .map(function (method, index) { return (jsxRuntime.jsx(ReadMethodComponent, { method: method, contractObj: contractObj }, index)); }), type == 1 &&
                    contractObj.abi
                        .filter(function (item) {
                        return item.type == "function" &&
                            item.stateMutability != "view" &&
                            item.name.includes(searched);
                    })
                        .map(function (method, index) { return (jsxRuntime.jsx(WriteMethodComponent, { method: method, contractObj: contractObj }, index)); })] })) }));
};

exports.AbiToUi = AbiToUi;
exports.ConnectWalletComponent = ConnectWalletComponent;
exports.ConnectedMenu = ConnectedMenu;
exports.Identicon = Identicon;
exports.getWithExpiry = getWithExpiry;
exports.setWithExpiry = setWithExpiry;
//# sourceMappingURL=index.js.map
