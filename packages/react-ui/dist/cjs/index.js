'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactProviders = require('@cryptogate/react-providers');
var react = require('react');
var Jazzicon = require('react-jazzicon');
var reactDeviceDetect = require('react-device-detect');
var ethers = require('ethers');
var BigNumber = require('bignumber.js');
var abi$1 = require('@ethersproject/abi');
var Slider = require('react-slick');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');
var core = require('@cryptogate/core');
var detectEthereumProvider = require('@metamask/detect-provider');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Jazzicon__default = /*#__PURE__*/_interopDefaultLegacy(Jazzicon);
var BigNumber__default = /*#__PURE__*/_interopDefaultLegacy(BigNumber);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);
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

var Identicon = function (_a) {
    var walletAddress = _a.walletAddress;
    var ethereum = reactProviders.useMultichain().ethereum;
    var account = ethereum.account;
    return (jsxRuntime.jsx(Jazzicon__default["default"], { diameter: reactDeviceDetect.isMobile ? 30 : 40, seed: Jazzicon.jsNumberForAddress(walletAddress ? walletAddress : (account === null || account === void 0 ? void 0 : account.toString()) || "") }));
};

var disconnect = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyFJREFUOI2tlc9rHHUUwD/vOzOb6IZiakCJl0hoLoGW6mrY2c3GLdH6A0QQKYgUevKu4M0/wJN/gCBovWjoRasHGzsuM7sxMRoprAerNBUNzcHupkpJnN3v87AzcdzOqojv8mDe+36+7/t+jfA/SqvVOmqtvQgg6cdGo/FgsVjcLZVKt//usKqaVqv1lLW2JiJHVPV713UvqOota+0qcBL4QlKo4zhXgSvGmGXf92/mQRO/FeDhIVMM/AzMAFue5z1uAIrF4i5wBThprV1ttVpHh6FhGM45jhMl0Guq+rqqvgy8CzgJdNsYs7ywsPDLYSqS/KRP2cpGHobhnIgEwDTwURzHL9br9d8yZ09baz8BeiIyV6lUrh+CR8H7/f5UBvrh5OTkC/Pz878PvyiKoneAs8Ar1Wr1TZM1+r5/0xizDGwlabn8b6BpXImeBTDD1iH4CWBaRC7+AxTgvkT/mgvOgQNM7+3tTYwiBkEwAZwDMMZ8ngtuNpuzYRi+0ev1nBSuqg+p6qW8bmm324VCoXAemFHVjXK5fOkOcKPROKaqDRF5zXGc09nI8+DtdrvQ7XbfV9XngB3Xdc+IiIXM5K2trc30+/0IeIChQgVBcI/neZ8CjwDfeJ637DjOrYODgw8S6K619lStVvs25QkMxrTZbG4waP7c6mdbUUS+VtWfgGeBHVWtLy4ufpf1F4Aoip4GPgauxXF8PNv8Q0XKRk5epKkYABGpJZG/PQoKUK/Xu8aYJ/mzW26MjY3t5vmaBHgkueDGKGi73S40m82Xer2eE8fxKeBL4EQcx58FQTA1CvxDov1R0E6ns6Kq5x3HebVer3fjOH4ihXuet7q+vn7vHWDXdS8AsYicDcNwOesQBMFEp9NZISkU8Faaliw8juO/wAUOK/4Vg9XXB95T1ZaI3M9gomaAnX6//9jS0tLV7MXDi2t8fLxaKpVuy5Bhm8HCKWQPq+qG67pnyuXydl6qMozjIjJbqVSuSxiG6yLyKMmatNZOAM8Dx4A9EQl8319NJ2qUbG5u3r2/vz9VrVZ/BJAoii4Ddxljnhn1S/ov8gdQvalD20NEGgAAAABJRU5ErkJggg==";
var provider = new ethers.ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/ced28563ff504eeca880d195dda82166");
var useENS = function () {
    var _a = react.useState(""), name = _a[0], setname = _a[1];
    var getName = function (addr) {
        provider.lookupAddress(addr).then(function (resolvedName) {
            if (resolvedName)
                setname(resolvedName);
            else
                setname("");
            return resolvedName ? resolvedName : null;
        });
    };
    return { name: name, getName: getName };
};
var WalletInformation = function (_a) {
    var onClose = _a.onClose, _b = _a.direction, direction = _b === void 0 ? "y" : _b;
    var _c = reactProviders.useEthereum(), getEthBalance = _c.getEthBalance, account = _c.account, deactivate = _c.deactivate;
    var etherBalance = getEthBalance(account);
    var _d = useENS(), getName = _d.getName, name = _d.name;
    var handleDisconnect = function () {
        account && deactivate();
        onClose();
    };
    react.useEffect(function () {
        if (account) {
            getName(account);
        }
    }, [account]);
    return (jsxRuntime.jsxs("div", __assign({ style: {
            display: "flex",
            flexDirection: direction == "y" ? "column" : "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
        } }, { children: [jsxRuntime.jsxs("div", __assign({ style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                } }, { children: [account && name && (jsxRuntime.jsxs("div", __assign({ style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        } }, { children: [jsxRuntime.jsxs("p", __assign({ style: {
                                    color: "#c4c4c4",
                                    margin: "0 10px 0 0",
                                    lineHeight: 1,
                                } }, { children: [account === null || account === void 0 ? void 0 : account.slice(0, 6), "...", account === null || account === void 0 ? void 0 : account.slice(-3)] })), jsxRuntime.jsx("p", __assign({ style: { color: "#c4c4c4", lineHeight: 0 } }, { children: name ? name : "" }))] }))), account && !name && (jsxRuntime.jsxs("p", __assign({ style: {
                            color: "#c4c4c4",
                            margin: "0 10px 0 0",
                            lineHeight: 1,
                        } }, { children: [account === null || account === void 0 ? void 0 : account.slice(0, 6), "...", account === null || account === void 0 ? void 0 : account.slice(-3)] }))), jsxRuntime.jsx("span", __assign({ style: {
                            marginLeft: "10px",
                            cursor: "pointer",
                            height: "22px",
                            width: "22px",
                        } }, { children: jsxRuntime.jsx("img", { src: disconnect, alt: "Disconnect", className: "disconnect", onClick: handleDisconnect }) })), jsxRuntime.jsx("span", __assign({ style: {
                            display: direction == "x" ? "flex" : "none",
                            margin: "0 1vw 0 4vw",
                        } }, { children: jsxRuntime.jsx(Identicon, {}) }))] })), direction == "y" && (jsxRuntime.jsx("hr", { style: { width: "100%", marginBottom: "2vh" } })), jsxRuntime.jsxs("div", __assign({ style: {
                    marginRight: direction == "x" ? "10vw" : "0",
                    padding: 0,
                } }, { children: [jsxRuntime.jsx("p", __assign({ style: { margin: 0 } }, { children: "Total Balance" })), jsxRuntime.jsxs("p", __assign({ style: {
                            fontWeight: "bold",
                            margin: 0,
                        } }, { children: [etherBalance &&
                                account &&
                                ethers.utils.formatEther(etherBalance).slice(0, 7), " ", "ETH"] }))] }))] })));
};

var ERC20Interface = reactProviders.useDapp.ERC20Interface, useContractCalls$1 = reactProviders.useDapp.useContractCalls;
var useTokensMultiCall = function (_a) {
    var tokenList = _a.tokenList, method = _a.method; _a.format; var _c = _a.args, args = _c === void 0 ? [] : _c;
    return useContractCalls$1(tokenList
        ? tokenList.map(function (token) { return ({
            abi: ERC20Interface,
            address: token,
            method: method,
            args: args,
        }); })
        : []);
};

var toDecimals = function (_a) {
    var number = _a.number, _b = _a.precision, precision = _b === void 0 ? 0 : _b, _c = _a.tokenDecimals, tokenDecimals = _c === void 0 ? 0 : _c;
    var decimals = new BigNumber__default["default"](10).exponentiatedBy(tokenDecimals);
    if (precision === 0) {
        return new BigNumber__default["default"](number._hex).dividedBy(decimals).toNumber();
    }
    return new BigNumber__default["default"](number._hex).dividedBy(decimals).toPrecision(precision);
};
var convertResultToReadableFormat = function (result) {
    return result.map(function (e) {
        return e
            ? toDecimals({
                number: e[0],
            })
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
    var _b = _a.full, full = _b === void 0 ? false : _b, _c = _a.rows, rows = _c === void 0 ? 1 : _c;
    return ({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: full ? 2 : 1,
        slidesToScroll: full ? 2 : 1,
        rows: rows,
    });
};

var index$5 = function (_a) {
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
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", __assign({ style: { fontWeight: "bold", lineHeight: 0 } }, { children: "TOKENS" })), jsxRuntime.jsx("div", __assign({ className: "tokenDetailsContainer" }, { children: balance[0] &&
                    symbol[0] &&
                    decimals[0] &&
                    balance.map(function (e, index) { return (jsxRuntime.jsx("div", { children: e && (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("div", __assign({ style: {
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "1vh 0",
                                } }, { children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", __assign({ style: { margin: 0, fontWeight: "500" } }, { children: symbol[index] })), jsxRuntime.jsx("p", __assign({ style: { margin: 0 } }, { children: toDecimals({
                                                number: e[0],
                                                precision: 7,
                                                tokenDecimals: decimals[index],
                                            }) }))] }) })) })) }, "token-mainlist-".concat(index))); }) }))] }));
};

var contractName = "IERC721Metadata";
var abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "_approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];
var metadata = "{\"compiler\":{\"version\":\"0.8.10+commit.fc410830\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"See https://eips.ethereum.org/EIPS/eip-721\",\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"name()\":{\"details\":\"Returns the token collection name.\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Returns the token collection symbol.\"},\"tokenURI(uint256)\":{\"details\":\"Returns the Uniform Resource Identifier (URI) for `tokenId` token.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"title\":\"ERC-721 Non-Fungible Token Standard, optional metadata extension\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":\"IERC721Metadata\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xf101e8720213560fab41104d53b3cc7ba0456ef3a98455aa7f022391783144a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3e7820bcf567e6892d937c3cb10db263a4042e446799bca602535868d822384e\",\"dweb:/ipfs/QmPG2oeDjKncqsEeyYGjAN7CwAJmMgHterXGGnpzhha4z7\"]},\"project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0xd32fb7f530a914b1083d10a6bed3a586f2451952fec04fe542bcc670a82f7ba5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af63ab940a34687c45f0ad84960b048fc5f49330c92ccb422db7822a444733b9\",\"dweb:/ipfs/QmUShaQEu8HS1GjDnsMJQ8jkZEBrecn6NuDZ3pfjY1gVck\"]},\"project:/node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}";
var bytecode = "0x";
var deployedBytecode = "0x";
var immutableReferences = {
};
var generatedSources = [
];
var deployedGeneratedSources = [
];
var sourceMap = "";
var deployedSourceMap = "";
var source = "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport \"../IERC721.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Metadata is IERC721 {\n    /**\n     * @dev Returns the token collection name.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the token collection symbol.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\n     */\n    function tokenURI(uint256 tokenId) external view returns (string memory);\n}\n";
var sourcePath = "/home/highpofly/Documents/code/dcb-lottery/blockend/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
var ast = {
	absolutePath: "project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
	exportedSymbols: {
		IERC165: [
			4701
		],
		IERC721: [
			3692
		],
		IERC721Metadata: [
			4143
		]
	},
	id: 4144,
	license: "MIT",
	nodeType: "SourceUnit",
	nodes: [
		{
			id: 4118,
			literals: [
				"solidity",
				"^",
				"0.8",
				".0"
			],
			nodeType: "PragmaDirective",
			src: "33:23:23"
		},
		{
			absolutePath: "project:/node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol",
			file: "../IERC721.sol",
			id: 4119,
			nameLocation: "-1:-1:-1",
			nodeType: "ImportDirective",
			scope: 4144,
			sourceUnit: 3693,
			src: "58:24:23",
			symbolAliases: [
			],
			unitAlias: ""
		},
		{
			abstract: false,
			baseContracts: [
				{
					baseName: {
						id: 4121,
						name: "IERC721",
						nodeType: "IdentifierPath",
						referencedDeclaration: 3692,
						src: "247:7:23"
					},
					id: 4122,
					nodeType: "InheritanceSpecifier",
					src: "247:7:23"
				}
			],
			canonicalName: "IERC721Metadata",
			contractDependencies: [
			],
			contractKind: "interface",
			documentation: {
				id: 4120,
				nodeType: "StructuredDocumentation",
				src: "84:133:23",
				text: " @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n @dev See https://eips.ethereum.org/EIPS/eip-721"
			},
			fullyImplemented: false,
			id: 4143,
			linearizedBaseContracts: [
				4143,
				3692,
				4701
			],
			name: "IERC721Metadata",
			nameLocation: "228:15:23",
			nodeType: "ContractDefinition",
			nodes: [
				{
					documentation: {
						id: 4123,
						nodeType: "StructuredDocumentation",
						src: "261:58:23",
						text: " @dev Returns the token collection name."
					},
					functionSelector: "06fdde03",
					id: 4128,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "name",
					nameLocation: "333:4:23",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 4124,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "337:2:23"
					},
					returnParameters: {
						id: 4127,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4126,
								mutability: "mutable",
								name: "",
								nameLocation: "-1:-1:-1",
								nodeType: "VariableDeclaration",
								scope: 4128,
								src: "363:13:23",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 4125,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "363:6:23",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								visibility: "internal"
							}
						],
						src: "362:15:23"
					},
					scope: 4143,
					src: "324:54:23",
					stateMutability: "view",
					virtual: false,
					visibility: "external"
				},
				{
					documentation: {
						id: 4129,
						nodeType: "StructuredDocumentation",
						src: "384:60:23",
						text: " @dev Returns the token collection symbol."
					},
					functionSelector: "95d89b41",
					id: 4134,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "symbol",
					nameLocation: "458:6:23",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 4130,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "464:2:23"
					},
					returnParameters: {
						id: 4133,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4132,
								mutability: "mutable",
								name: "",
								nameLocation: "-1:-1:-1",
								nodeType: "VariableDeclaration",
								scope: 4134,
								src: "490:13:23",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 4131,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "490:6:23",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								visibility: "internal"
							}
						],
						src: "489:15:23"
					},
					scope: 4143,
					src: "449:56:23",
					stateMutability: "view",
					virtual: false,
					visibility: "external"
				},
				{
					documentation: {
						id: 4135,
						nodeType: "StructuredDocumentation",
						src: "511:90:23",
						text: " @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token."
					},
					functionSelector: "c87b56dd",
					id: 4142,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "tokenURI",
					nameLocation: "615:8:23",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 4138,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4137,
								mutability: "mutable",
								name: "tokenId",
								nameLocation: "632:7:23",
								nodeType: "VariableDeclaration",
								scope: 4142,
								src: "624:15:23",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 4136,
									name: "uint256",
									nodeType: "ElementaryTypeName",
									src: "624:7:23",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								visibility: "internal"
							}
						],
						src: "623:17:23"
					},
					returnParameters: {
						id: 4141,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4140,
								mutability: "mutable",
								name: "",
								nameLocation: "-1:-1:-1",
								nodeType: "VariableDeclaration",
								scope: 4142,
								src: "664:13:23",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 4139,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "664:6:23",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								visibility: "internal"
							}
						],
						src: "663:15:23"
					},
					scope: 4143,
					src: "606:73:23",
					stateMutability: "view",
					virtual: false,
					visibility: "external"
				}
			],
			scope: 4144,
			src: "218:463:23",
			usedErrors: [
			]
		}
	],
	src: "33:649:23"
};
var legacyAST = {
	absolutePath: "project:/node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol",
	exportedSymbols: {
		IERC165: [
			4701
		],
		IERC721: [
			3692
		],
		IERC721Metadata: [
			4143
		]
	},
	id: 4144,
	license: "MIT",
	nodeType: "SourceUnit",
	nodes: [
		{
			id: 4118,
			literals: [
				"solidity",
				"^",
				"0.8",
				".0"
			],
			nodeType: "PragmaDirective",
			src: "33:23:23"
		},
		{
			absolutePath: "project:/node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol",
			file: "../IERC721.sol",
			id: 4119,
			nameLocation: "-1:-1:-1",
			nodeType: "ImportDirective",
			scope: 4144,
			sourceUnit: 3693,
			src: "58:24:23",
			symbolAliases: [
			],
			unitAlias: ""
		},
		{
			abstract: false,
			baseContracts: [
				{
					baseName: {
						id: 4121,
						name: "IERC721",
						nodeType: "IdentifierPath",
						referencedDeclaration: 3692,
						src: "247:7:23"
					},
					id: 4122,
					nodeType: "InheritanceSpecifier",
					src: "247:7:23"
				}
			],
			canonicalName: "IERC721Metadata",
			contractDependencies: [
			],
			contractKind: "interface",
			documentation: {
				id: 4120,
				nodeType: "StructuredDocumentation",
				src: "84:133:23",
				text: " @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n @dev See https://eips.ethereum.org/EIPS/eip-721"
			},
			fullyImplemented: false,
			id: 4143,
			linearizedBaseContracts: [
				4143,
				3692,
				4701
			],
			name: "IERC721Metadata",
			nameLocation: "228:15:23",
			nodeType: "ContractDefinition",
			nodes: [
				{
					documentation: {
						id: 4123,
						nodeType: "StructuredDocumentation",
						src: "261:58:23",
						text: " @dev Returns the token collection name."
					},
					functionSelector: "06fdde03",
					id: 4128,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "name",
					nameLocation: "333:4:23",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 4124,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "337:2:23"
					},
					returnParameters: {
						id: 4127,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4126,
								mutability: "mutable",
								name: "",
								nameLocation: "-1:-1:-1",
								nodeType: "VariableDeclaration",
								scope: 4128,
								src: "363:13:23",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 4125,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "363:6:23",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								visibility: "internal"
							}
						],
						src: "362:15:23"
					},
					scope: 4143,
					src: "324:54:23",
					stateMutability: "view",
					virtual: false,
					visibility: "external"
				},
				{
					documentation: {
						id: 4129,
						nodeType: "StructuredDocumentation",
						src: "384:60:23",
						text: " @dev Returns the token collection symbol."
					},
					functionSelector: "95d89b41",
					id: 4134,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "symbol",
					nameLocation: "458:6:23",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 4130,
						nodeType: "ParameterList",
						parameters: [
						],
						src: "464:2:23"
					},
					returnParameters: {
						id: 4133,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4132,
								mutability: "mutable",
								name: "",
								nameLocation: "-1:-1:-1",
								nodeType: "VariableDeclaration",
								scope: 4134,
								src: "490:13:23",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 4131,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "490:6:23",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								visibility: "internal"
							}
						],
						src: "489:15:23"
					},
					scope: 4143,
					src: "449:56:23",
					stateMutability: "view",
					virtual: false,
					visibility: "external"
				},
				{
					documentation: {
						id: 4135,
						nodeType: "StructuredDocumentation",
						src: "511:90:23",
						text: " @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token."
					},
					functionSelector: "c87b56dd",
					id: 4142,
					implemented: false,
					kind: "function",
					modifiers: [
					],
					name: "tokenURI",
					nameLocation: "615:8:23",
					nodeType: "FunctionDefinition",
					parameters: {
						id: 4138,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4137,
								mutability: "mutable",
								name: "tokenId",
								nameLocation: "632:7:23",
								nodeType: "VariableDeclaration",
								scope: 4142,
								src: "624:15:23",
								stateVariable: false,
								storageLocation: "default",
								typeDescriptions: {
									typeIdentifier: "t_uint256",
									typeString: "uint256"
								},
								typeName: {
									id: 4136,
									name: "uint256",
									nodeType: "ElementaryTypeName",
									src: "624:7:23",
									typeDescriptions: {
										typeIdentifier: "t_uint256",
										typeString: "uint256"
									}
								},
								visibility: "internal"
							}
						],
						src: "623:17:23"
					},
					returnParameters: {
						id: 4141,
						nodeType: "ParameterList",
						parameters: [
							{
								constant: false,
								id: 4140,
								mutability: "mutable",
								name: "",
								nameLocation: "-1:-1:-1",
								nodeType: "VariableDeclaration",
								scope: 4142,
								src: "664:13:23",
								stateVariable: false,
								storageLocation: "memory",
								typeDescriptions: {
									typeIdentifier: "t_string_memory_ptr",
									typeString: "string"
								},
								typeName: {
									id: 4139,
									name: "string",
									nodeType: "ElementaryTypeName",
									src: "664:6:23",
									typeDescriptions: {
										typeIdentifier: "t_string_storage_ptr",
										typeString: "string"
									}
								},
								visibility: "internal"
							}
						],
						src: "663:15:23"
					},
					scope: 4143,
					src: "606:73:23",
					stateMutability: "view",
					virtual: false,
					visibility: "external"
				}
			],
			scope: 4144,
			src: "218:463:23",
			usedErrors: [
			]
		}
	],
	src: "33:649:23"
};
var compiler = {
	name: "solc",
	version: "0.8.10+commit.fc410830.Emscripten.clang"
};
var networks = {
};
var schemaVersion = "3.4.3";
var updatedAt = "2021-12-11T18:02:41.999Z";
var devdoc = {
	details: "See https://eips.ethereum.org/EIPS/eip-721",
	kind: "dev",
	methods: {
		"approve(address,uint256)": {
			details: "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
		},
		"balanceOf(address)": {
			details: "Returns the number of tokens in ``owner``'s account."
		},
		"getApproved(uint256)": {
			details: "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
		},
		"isApprovedForAll(address,address)": {
			details: "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
		},
		"name()": {
			details: "Returns the token collection name."
		},
		"ownerOf(uint256)": {
			details: "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
		},
		"safeTransferFrom(address,address,uint256)": {
			details: "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
		},
		"safeTransferFrom(address,address,uint256,bytes)": {
			details: "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
		},
		"setApprovalForAll(address,bool)": {
			details: "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event."
		},
		"supportsInterface(bytes4)": {
			details: "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
		},
		"symbol()": {
			details: "Returns the token collection symbol."
		},
		"tokenURI(uint256)": {
			details: "Returns the Uniform Resource Identifier (URI) for `tokenId` token."
		},
		"transferFrom(address,address,uint256)": {
			details: "Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
		}
	},
	title: "ERC-721 Non-Fungible Token Standard, optional metadata extension",
	version: 1
};
var userdoc = {
	kind: "user",
	methods: {
	},
	version: 1
};
var IERC721Metadata = {
	contractName: contractName,
	abi: abi,
	metadata: metadata,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	immutableReferences: immutableReferences,
	generatedSources: generatedSources,
	deployedGeneratedSources: deployedGeneratedSources,
	sourceMap: sourceMap,
	deployedSourceMap: deployedSourceMap,
	source: source,
	sourcePath: sourcePath,
	ast: ast,
	legacyAST: legacyAST,
	compiler: compiler,
	networks: networks,
	schemaVersion: schemaVersion,
	updatedAt: updatedAt,
	devdoc: devdoc,
	userdoc: userdoc
};

var ERC721 = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "maxNftSupply",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "saleStart",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "BAYC_PROVENANCE",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "MAX_APES",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "REVEAL_TIMESTAMP",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "apePrice",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "baseURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "emergencySetStartingIndexBlock",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "flipSaleState",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "maxApePurchase",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "numberOfTokens",
				type: "uint256"
			}
		],
		name: "mintApe",
		outputs: [
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "reserveApes",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "saleIsActive",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "baseURI",
				type: "string"
			}
		],
		name: "setBaseURI",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "provenanceHash",
				type: "string"
			}
		],
		name: "setProvenanceHash",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "revealTimeStamp",
				type: "uint256"
			}
		],
		name: "setRevealTimestamp",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "setStartingIndex",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "startingIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "startingIndexBlock",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "withdraw",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var useContractCalls = reactProviders.useDapp.useContractCalls;
var IERC721MetadataContractInterface = new abi$1.Interface(IERC721Metadata.abi);
var ERC721ContractInterface = new abi$1.Interface(ERC721);
var useNFTMetadataMultiCall = function (_a) {
    var NFTs = _a.NFTs, method = _a.method, _b = _a.format, format = _b === void 0 ? false : _b, _c = _a.args, args = _c === void 0 ? [] : _c;
    var result = useContractCalls(NFTs
        ? NFTs.map(function (nft) { return ({
            abi: IERC721MetadataContractInterface,
            address: nft,
            method: method,
            args: args,
        }); })
        : []);
    return result[0] && format ? convertResultToReadableFormat(result) : result;
};
var useTokenURIIndexCover = function (_a) {
    var NFTs = _a.NFTs;
    return useContractCalls(NFTs.map(function (nft) { return ({
        abi: ERC721ContractInterface,
        address: "" + nft,
        method: NFT_CONTRACT_METHODS.TOKEN_URI,
        args: [1],
    }); }));
};

var index$4 = function (_a) {
    var URI = _a.URI, number = _a.number, symbol = _a.symbol;
    var _b = react.useState(""), image = _b[0], setImg = _b[1];
    var _c = react.useState(false), empty = _c[0], setEmpty = _c[1];
    react.useEffect(function () {
        if (URI) {
            var validURI = isUriIPFS(URI[0]);
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
    return (jsxRuntime.jsx("div", __assign({ style: { padding: "0 1vw" } }, { children: jsxRuntime.jsxs("div", __assign({ style: { borderRadius: "10px", border: "1px solid black" } }, { children: [jsxRuntime.jsxs("div", __assign({ style: {
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
                        width: "100%",
                        padding: "1px 1vw",
                    } }, { children: [jsxRuntime.jsx("div", __assign({ style: { marginRight: "2vw" } }, { children: symbol })), number && jsxRuntime.jsx("div", { children: number })] }))] })) })));
};

var index$3 = function (_a) {
    var URIs = _a.URIs, symbols = _a.symbols, numbers = _a.numbers, full = _a.full, onCollectionSelected = _a.onCollectionSelected;
    return (jsxRuntime.jsx("div", __assign({ style: {
            minWidth: "300px",
            maxWidth: "300px",
            padding: "1vh 25px 0 25px",
        } }, { children: URIs.length > 0 ? (jsxRuntime.jsx(Slider__default["default"], __assign({}, build_slider_settings({ full: full }), { children: URIs.map(function (uri, index) {
                return (jsxRuntime.jsx("div", __assign({ onClick: function () {
                        onCollectionSelected(index);
                    } }, { children: jsxRuntime.jsx(index$4, { URI: uri, number: numbers[index], symbol: Array.isArray(symbols) ? symbols[index] : symbols }, index) }), "".concat(Array.isArray(symbols) ? symbols[index] : symbols, "-").concat(numbers[index])));
            }) }))) : (jsxRuntime.jsxs("div", __assign({ style: {
                textAlign: "center",
                display: "flex",
                alignItems: "center",
            } }, { children: [jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), "Oops..", jsxRuntime.jsx("br", {}), "There's nothing to show here"] }))) })));
};

var index$2 = function (_a) {
    _a.NFT; _a.balance; var symbol = _a.symbol;
    reactProviders.useEthereum().account;
    // const tokenIds = useTokenOfOwnerByIndex({
    //   NFT,
    //   args: [account, balance],
    // });
    // const URIs = useTokenURIIndex({ NFT, args: tokenIds });
    return (jsxRuntime.jsx("div", __assign({ style: {
            minWidth: "300px",
            maxWidth: "300px",
            padding: "1vh 25px 0 25px",
        } }, { children: jsxRuntime.jsx(jsxRuntime.Fragment, { children: symbol }) })));
};

var index$1 = function (_a) {
    var NFTs = _a.NFTs, Full = _a.Full;
    var _b = react.useState(-1), clicked = _b[0], setClicked = _b[1];
    var account = reactProviders.useEthereum().account;
    var balances = useNFTMetadataMultiCall({
        NFTs: NFTs,
        method: NFT_CONTRACT_METHODS.BALANCE_OF,
        format: true,
        args: [account],
    });
    // var tpmNFTs = [];
    // var tpmBalances = [];
    // for (var i = 0; i < balances.length; i++) {
    //   if (balances[i] > 0) {
    //     tpmNFTs.push(NFTs[i]);
    //     tpmBalances.push(balances[i]);
    //   }
    // }
    // balances = tpmBalances;
    // NFTs = tpmNFTs;
    var symbols = useNFTMetadataMultiCall({
        NFTs: NFTs,
        method: NFT_CONTRACT_METHODS.SYMBOL,
    });
    var URIs = useTokenURIIndexCover({ NFTs: NFTs });
    return (jsxRuntime.jsxs("div", __assign({ style: { display: "flex", flexDirection: "column" } }, { children: [jsxRuntime.jsxs("p", __assign({ style: { fontWeight: "bold", lineHeight: 0 }, onClick: function () {
                    if (clicked != -1) {
                        setClicked(-1);
                    }
                } }, { children: [clicked >= 0 ? "< ".concat(symbols[clicked][0], "'s ") : "", " COLLECTIBLES"] })), clicked == -1 &&
                areAllElementsValid(URIs) &&
                areAllElementsValid(balances) && (jsxRuntime.jsx(index$3, { symbols: symbols, URIs: URIs, numbers: balances, full: Full, onCollectionSelected: setClicked })), clicked != -1 &&
                areAllElementsValid(URIs) &&
                areAllElementsValid(balances) && (jsxRuntime.jsx(index$2, { NFT: NFTs[clicked], symbol: symbols[clicked][0], balance: balances[clicked] }))] })));
};

var index = function (_a) {
    var onClose = _a.onClose, Store = _a.Store;
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(WalletInformation, { onClose: onClose, direction: "x" }), jsxRuntime.jsx("hr", { style: { width: "100%" } }), Store && (Store.Tokens || Store.NFTs) && (jsxRuntime.jsxs("div", __assign({ style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "felx-start",
                } }, { children: [Store.Tokens && Store.Tokens.length > 0 && (jsxRuntime.jsx(index$5, { tokens: Store.Tokens })), Store.Tokens &&
                        Store.Tokens.length &&
                        Store.NFTs &&
                        Store.NFTs.length && (jsxRuntime.jsx("div", { style: { borderLeft: "1px solid #888888", margin: "0 2vw 0 0" } })), Store.NFTs && Store.NFTs.length > 0 && (jsxRuntime.jsx(index$1, { NFTs: Store.NFTs, Full: !(Store.Tokens && Store.Tokens.length) }))] })))] }));
};

var ConnectMenu = function (_a) {
    var ChosenConnectedMenu = _a.ChosenConnectedMenu, onClose = _a.onClose, isOpen = _a.isOpen, Store = _a.Store;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [ChosenConnectedMenu == exports.ConnectedMenu.NOMENU && jsxRuntime.jsx(jsxRuntime.Fragment, {}), ChosenConnectedMenu != exports.ConnectedMenu.NOMENU && (jsxRuntime.jsxs("div", __assign({ style: {
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
                            backgroundColor: "#ffffff",
                            boxShadow: "0 15px 15px rgba(0, 0, 0, 0.2)",
                            opacity: isOpen ? "1" : "0",
                            display: "block",
                            position: "absolute",
                            top: "80px",
                            right: "40px",
                            borderRadius: "20px",
                            border: "1px solid #555555",
                            boxSizing: "border-box",
                            transform: isOpen ? "translateY(0)" : "translateY(-100%)",
                            transition: "all 0.2s ease-in-out",
                            height: "auto",
                            padding: "20px 20px 20px 20px",
                            width: "auto",
                        } }, { children: [ChosenConnectedMenu == exports.ConnectedMenu.WALLETINFORMATION && (jsxRuntime.jsx(WalletInformation, { onClose: onClose })), ChosenConnectedMenu == exports.ConnectedMenu.STORE && (jsxRuntime.jsx(index, { onClose: onClose, Store: Store }))] }))] })))] }));
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

reactProviders.useDapp.ChainId;
var signingMessage = function (account, library, SignatureMessage) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                core.ethSignMessage({
                    account: account,
                    provider: library,
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
    var ActiveComponent = _a.ActiveComponent, DisabledComponent = _a.DisabledComponent, ConnectedComponent = _a.ConnectedComponent, SignatureMessage = _a.SignatureMessage, _b = _a.NetworkChainIds, NetworkChainIds = _b === void 0 ? [] : _b, NetworkAlertMessage = _a.NetworkAlertMessage, ChosenConnectedMenu = _a.ChosenConnectedMenu, onSign = _a.onSign, Store = _a.Store, setOpenOptions = _a.setOpenOptions;
    var _c = react.useState(false), openMenu = _c[0], setOpenMenu = _c[1];
    var _d = react.useState(null), keyValue = _d[0], setKeyValue = _d[1];
    var _e = reactProviders.useMultichain(), ethereum = _e.ethereum, network = _e.network;
    var account = ethereum.account, library = ethereum.library, deactivate = ethereum.deactivate;
    react.useEffect(function () {
        if (account && library) {
            if (NetworkChainIds.length == 0 ||
                (NetworkChainIds.length > 0 &&
                    (network.network.chainId
                        ? NetworkChainIds.includes(network.network.chainId)
                        : false))) {
                if (onSign) {
                    var key = getWithExpiry("sig-".concat(account === null || account === void 0 ? void 0 : account.toLowerCase()));
                    if (key) {
                        setKeyValue(key);
                        onSign(key);
                    }
                    else {
                        signingMessage(account, library, SignatureMessage).then(function (key) {
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
    }, [account, library]);
    return account ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [keyValue && keyValue != {} ? (jsxRuntime.jsx("div", __assign({ onClick: function () { return setOpenMenu(!openMenu); } }, { children: ConnectedComponent }))) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: DisabledComponent })), jsxRuntime.jsx(ConnectMenu, { ChosenConnectedMenu: ChosenConnectedMenu, Store: Store, onClose: function () {
                    setOpenMenu(false);
                }, isOpen: openMenu })] })) : (jsxRuntime.jsx("div", __assign({ onClick: function () {
            setOpenOptions(true);
        } }, { children: ActiveComponent })));
};

var WalletListing = function (_a) {
    var iconSrc = _a.iconSrc, heading = _a.heading, onWalletCall = _a.onWalletCall, _b = _a.isWhite, isWhite = _b === void 0 ? false : _b, _c = _a.noBottomBorder, noBottomBorder = _c === void 0 ? false : _c;
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
            }, onClick: onWalletCall }, { children: [!isWhite && (jsxRuntime.jsx("span", __assign({ style: { paddingRight: "15px" } }, { children: jsxRuntime.jsx("img", { src: iconSrc, alt: heading, width: "25px", height: "25px" }) }))), jsxRuntime.jsx("h6", __assign({ style: {
                    margin: "0",
                    padding: "0",
                    color: "black",
                    fontSize: "15px",
                } }, { children: heading }))] })));
};

var DCBMetamask = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRIiaWUXWhdVRbHf2vvfW7uzf1Ieptqa22TWqsz/ZgRFayKxQ+Kip8TtMI8jMiMzvig0FJknjSK+CKoCKKID/qgb1atYJFpdQioIKj1o45t09bGxpa25jbJ/T537zUP5yY3SVNBXHDO5uy91/+/1vqvdQTgmduWvXL5Clde3df18pqnRw7xO+3TrRdmMsZt2XOwsXH7zuMPy9CtxYLxqRNiyFzZb8PaZW5XE/PimxzZPTRE+C3gR4YG/hAJD52c8Pd/PBIXKw20YWWVDN289G8Cb0xfHCgaNq1xOCv7A+al42rf2Dg0Mnku4H1D61I5qnc7wj+N0Ru+Oebl81FP0Jkr2+Wpm5fuUrhltmMhDTddGtGXE4LKVFea4XSKxvS5MQRUNI5ValWuM6Ln12LlvwdbHC0p8+wzF5QgMnd3sg47v43ZOGBZu8zm8dwWmfahAAqI0vRgBI5PBvYcaFFucJYpWIPw7UJl8AE+Oez5aH+LagPCAuo0m/DVMc/73y1MkAQlex2Yb/gVfQ+dDvxSibn9z47lRUmyACarygfftxg9uzydHBAk6F7jDf87J0Pbyg1lfGoWmMBEFU6XZxPMJ0s0EGP3GlqhADTPRdAdwR3rI/qLpuOrsLhbuPtPEb2ZaUFlIffQCr7XWMepc5EsyiRA5+cFnQ5UO0shLdy1wbG0sCABqHpFTrpfyB3qo1wCcgCRhZWLhYHFhpUFS5ebaaZ5AMmSiYTb10UcKXmOlgKjp5WmT/RAZLyg4QcBeGHwgjvXnMd7Fy0xrCganIFyGbyfi9lTgOl2n38uAvk8BIWfxgOHTwX2n5QHtu4Ye90BPLCpq7dLOh7NJpw505pxTlYhlzU4l2zUap441qSM2s5WLPm8MNBnGOgzXHuJ6966AwyAJdyXICWAqRRkMhGNeqBW80xV9EC16tFZ4sZNmCqHw5Wq97W6x4glm52rjTH+HgDz03PrilbYPLvOAIUCFHrSweTSTx9YUtyg1gyjHRBrTWsypDZLNntXd77r9KJFDmPmcOBEN514dvV5cua5/r+nnb52VpsD1YqlO+sJKlO1upyKLBelUsngTpXtZKY7lJzR/nrdkkr5Dsl0LAr1lvmXc0bvnU2gCiEktbYu0cmI5rMZzTebnVDTXVpwRgvtsuC9EgIYI3MyciYMumpF1okmoNNPqRTjW4pzhr4lEek0OAfW6swwWqsoUK9BqeSpVlsIwqJihLXtaRcIyBoXxww7w1/bnY0I5HKOiYkYY5M2rVQgZPt47N0TjFeTtK//Yy/3r20SWvFM5N1Zi2kTaPvlAx8bL7J7vhaplCHdZbFWUITmihsZWfUI/zkY+GJM+WJMef9wD5Ur/42mF2Ot4Kwhk7EzBNOyeJHdbkrNnpSEDnvbsjlLw/RQv+IftPrW0xg9xl9uubGjSTqNL6yievXjRF++Qk72zczUrD+QTjTkIwEYe7J/vxO9BCAoZa9mVww7xjds+9H2rnwhiqKrVJVypTJDYkTI5/M0m/FYM2482DP8WKU70kGRMOiEFQp4la+XP3H0Mkfy8baqLI/hneMTrQ+veX60lkA9CnD18M63NjljHhVhvQgxQAjEpYmJ149Vfn51y5Zt7fsMq7J15MmLr0oTD3rMSYD/AwiqDMzaQbNCAAAAAElFTkSuQmCC";
var DCBWalletconnect = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABYlBMVEUAAAAA//9AgP8zmf9Jkv9An/85jv85qv8zmf9Gov9Aleo8lv85nPE5nP9Amf89kv86l/M6l/9An/89mf87nf85l/Y+nv88mfc4l/c4l/88nv86mf87lvg7nf85mfk6l/s6m/s7mvw6m/w9mfw7mPw8mfw7mPw8mPw8m/w7l/w6mPw8mvw8m/w8mvw7m/w6l/o8mf07mf07mP07mv06mv08mf08mf07mv07mf06mf08mv07mvs8mfs7mv07mPs7mf07mfs6mfs8mvs7mfs6mfw7mvw8mPw7mfw7mfw7mvw7mfw8mfw7mvw7mfw7mfw8mPw8mvw7mfs7mPw7mvw8mfw7mfw7mPs7mvw7mfw7mf07mf07mf08mfs7mfs7mf07mf07mf07mfs7mf08mf07mfw7mfw7mf07mfw7mfw7mvw7mfw7mfw7mfw7mv07mfw7mfw7mfw6mfw7mfw7mfw7mfz///8e814qAAAAdHRSTlMAAQQFBwgJCQoLDBESEhQVFhYYGRobHR4gICIjJycoQkJOT1BSVVdZWVtcXV5iY2VmZ2hobW5zdHV2fH6AgYaHioyNjpmcq6ytsLG0tba3uLi+v7/AwcLCy87P0dLU1NXY2dna4eTk5erq8/f4+fr7/P39/rFdoQUAAAABYktHRHWoapj7AAABGklEQVQYGdXBBzdCYQAG4PfWDYkbyiZ7lZW9V0lW9k5WhZDG+/+Pr3u+c7t1/ACeB/+F5vFo+J06HH6n8BYeUlFOGX+lITGmoETtEUsc1sDE/cCCZCgQCCVYEHOhaJvCZZcCQem+orCBovoos3MKJGUhyzM7TLRrL0x8+1WQ2oMOGKb9MDiCbUBnkjcapEVyHpLzlokOxEneOaFbprAEXV2UZByzeZL3DRBWqVuB4IqRzM8AU3mSj25gndIa0PhEMueHMJkj+dy0ReH8gsJm8wvJ3AR0oxmSKQon9upTCimSGR8kb4a6SAVQeUzd9wgMg2kKBzYItgiF9ABM+tPkrgqdukd+9aFE7+eOFZI1/NGDMq0WGCwt+Pt+AGOWYwwBzp+iAAAAAElFTkSuQmCC";
var DCBCoinbase = "data:image/png;base64,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";
var EthWalletListComp = function (_a) {
    var EthWalletList = _a.EthWalletList;
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
        } }, { children: [(EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.METAMASK) > -1) && (jsxRuntime.jsx(WalletListing, { noBottomBorder: EthWalletList.indexOf(exports.EthWallets.METAMASK) ==
                    EthWalletList.length - 1
                    ? true
                    : false, heading: "Metamask", iconSrc: DCBMetamask, onWalletCall: injectedHandle })), (EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.COINBASE) > -1) && (jsxRuntime.jsx(WalletListing, { noBottomBorder: EthWalletList.indexOf(exports.EthWallets.COINBASE) ==
                    EthWalletList.length - 1
                    ? true
                    : false, heading: "Coinbase", iconSrc: DCBCoinbase, onWalletCall: function () { return regHandle("Coinbase Wallet", wallets.Coinbase); } })), (EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                EthWalletList.indexOf(exports.EthWallets.WALLETCONNECT) > -1) && (jsxRuntime.jsx(WalletListing, { noBottomBorder: EthWalletList.indexOf(exports.EthWallets.ALL) > -1 ||
                    EthWalletList.indexOf(exports.EthWallets.WALLETCONNECT) ==
                        EthWalletList.length - 1
                    ? true
                    : false, heading: "WalletConnect", iconSrc: DCBWalletconnect, onWalletCall: function () {
                    return regHandle("Wallet Connect API", wallets.WalletConnect);
                } }))] })));
};

var SolWalletList = function (_a) {
    var SolWalletList = _a.SolWalletList;
    return (jsxRuntime.jsxs("div", __assign({ style: {
            border: "black 1px solid",
            borderRadius: "8px",
            marginBottom: "20px",
        } }, { children: [(SolWalletList.indexOf(exports.SolWallets.ALL) > -1 ||
                SolWalletList.indexOf(exports.SolWallets.PHANTOM) > -1) && (
            // <WalletListing
            //   heading="Metamask"
            //   iconSrc={DCBMetamask}
            //   onWalletCall={injectedHandle}
            // />
            jsxRuntime.jsx(jsxRuntime.Fragment, {})), (SolWalletList.indexOf(exports.SolWallets.ALL) > -1 ||
                SolWalletList.indexOf(exports.SolWallets.SLOPE) > -1) && (
            // <WalletListing
            //   heading="Coinbase"
            //   iconSrc={DCBCoinbase}
            //   onWalletCall={() => regHandle("Coinbase Wallet", wallets.Coinbase)}
            // />
            jsxRuntime.jsx(jsxRuntime.Fragment, {})), (SolWalletList.indexOf(exports.SolWallets.ALL) > -1 ||
                SolWalletList.indexOf(exports.SolWallets.SOLFLARE) > -1) && (
            // <WalletListing
            //   heading="Fortmatic"
            //   iconSrc={DCBFortmatic}
            //   onWalletCall={() => regHandle("Fortmatic", wallets.fortmatic)}
            // />
            jsxRuntime.jsx(jsxRuntime.Fragment, {}))] })));
};

var ConnectWalletList = function (_a) {
    var openOptions = _a.openOptions, setOpenOptions = _a.setOpenOptions, _b = _a.EthWalletList, EthWalletList = _b === void 0 ? [] : _b, _c = _a.SolWalletList, SolWalletList$1 = _c === void 0 ? [] : _c, WalletListStyle = _a.WalletListStyle;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign({ style: {
                    width: 270,
                    top: (WalletListStyle === null || WalletListStyle === void 0 ? void 0 : WalletListStyle.top) ? WalletListStyle.top : 0,
                    backgroundColor: (WalletListStyle === null || WalletListStyle === void 0 ? void 0 : WalletListStyle.background)
                        ? WalletListStyle.background
                        : "white",
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
                                } }, { children: "Connect with one of the available wallet providers." })), jsxRuntime.jsx("br", {}), EthWalletList.length > 0 && (jsxRuntime.jsx(EthWalletListComp, { EthWalletList: EthWalletList })), jsxRuntime.jsx("br", {}), (SolWalletList$1 === null || SolWalletList$1 === void 0 ? void 0 : SolWalletList$1.length) > 0 && (jsxRuntime.jsx(SolWalletList, { SolWalletList: SolWalletList$1 }))] })) })) })), openOptions && (jsxRuntime.jsx("div", { style: {
                    width: "100%",
                    height: "100%",
                    background: "transparent",
                    zIndex: 10000,
                    position: "fixed",
                    left: 0,
                }, onClick: function () { return setOpenOptions(false); } }))] }));
};

var Active = function () {
    var _a = react.useState(false), isHovering = _a[0], setIsHovering = _a[1];
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
    EthWallets: [],
    SolWallets: [],
    // ConnectedMenu: ConnectedMenu.WALLETINFORMATION,
    NetworkChainIds: [1],
    ConnectWalletButtonText: "Connect Wallet",
    SignatureMessage: "This is the default signaure message provided by Cryptogate.",
    NetworkAlertMessage: "Selected network is not supported.",
    WalletListStyle: {
        background: "white",
        top: "0",
    },
};

reactProviders.useDapp.ChainId;
exports.EthWallets = void 0;
(function (EthWallets) {
    EthWallets["ALL"] = "all";
    EthWallets["METAMASK"] = "metamask";
    EthWallets["WALLETCONNECT"] = "walletconnect";
    EthWallets["COINBASE"] = "coinbase";
})(exports.EthWallets || (exports.EthWallets = {}));
exports.SolWallets = void 0;
(function (SolWallets) {
    SolWallets["ALL"] = "all";
    SolWallets["PHANTOM"] = "phantom";
    SolWallets["SLOPE"] = "slope";
    SolWallets["SOLFLARE"] = "solflare";
})(exports.SolWallets || (exports.SolWallets = {}));
exports.ConnectedMenu = void 0;
(function (ConnectedMenu) {
    ConnectedMenu["NOMENU"] = "nomenu";
    ConnectedMenu["WALLETINFORMATION"] = "walletinformation";
    ConnectedMenu["STORE"] = "store";
})(exports.ConnectedMenu || (exports.ConnectedMenu = {}));
var ConnectWalletComponent = function (_a) {
    var _b = _a.ActiveComponent, ActiveComponent = _b === void 0 ? jsxRuntime.jsx(Active, {}) : _b, _c = _a.DisabledComponent, DisabledComponent = _c === void 0 ? jsxRuntime.jsx(Disabled, {}) : _c, _d = _a.ConnectedComponent, ConnectedComponent = _d === void 0 ? jsxRuntime.jsx(Identicon, {}) : _d, _e = _a.EthWalletList, EthWalletList = _e === void 0 ? defaults.EthWallets : _e, _f = _a.SolWalletList, SolWalletList = _f === void 0 ? defaults.SolWallets : _f, _g = _a.SignatureMessage, SignatureMessage = _g === void 0 ? defaults.SignatureMessage : _g, _h = _a.NetworkChainIds, NetworkChainIds = _h === void 0 ? defaults.NetworkChainIds : _h, _j = _a.NetworkAlertMessage, NetworkAlertMessage = _j === void 0 ? defaults.NetworkAlertMessage : _j, _k = _a.ConnectedMenuChosen, ConnectedMenuChosen = _k === void 0 ? exports.ConnectedMenu.WALLETINFORMATION : _k, Store = _a.Store, _l = _a.WalletListStyle, WalletListStyle = _l === void 0 ? defaults.WalletListStyle : _l, onSign = _a.onSign;
    var _m = react.useState(false), openOptions = _m[0], setOpenOptions = _m[1];
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ConnectWalletButton, { ActiveComponent: ActiveComponent, DisabledComponent: DisabledComponent, ConnectedComponent: ConnectedComponent, NetworkChainIds: NetworkChainIds, setOpenOptions: setOpenOptions, NetworkAlertMessage: NetworkAlertMessage, SignatureMessage: SignatureMessage, onSign: onSign, ChosenConnectedMenu: ConnectedMenuChosen, Store: Store }), openOptions ? (jsxRuntime.jsx(ConnectWalletList, { openOptions: openOptions, setOpenOptions: setOpenOptions, EthWalletList: EthWalletList, SolWalletList: SolWalletList, WalletListStyle: WalletListStyle })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}))] }));
};

exports.ConnectWalletComponent = ConnectWalletComponent;
exports.Identicon = Identicon;
exports.getWithExpiry = getWithExpiry;
exports.setWithExpiry = setWithExpiry;
//# sourceMappingURL=index.js.map
