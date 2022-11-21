'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sigUtil = require('@metamask/eth-sig-util');
var tweetnacl = require('tweetnacl');
var web3_js = require('@solana/web3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sigUtil__default = /*#__PURE__*/_interopDefaultLegacy(sigUtil);

var ERC20Abi = [{constant:true,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{constant:true,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:false,stateMutability:"view",type:"function"},{constant:false,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:false,stateMutability:"nonpayable",type:"function"},{constant:true,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:false,stateMutability:"view",type:"function"},{payable:true,stateMutability:"payable",type:"fallback"},{anonymous:false,inputs:[{indexed:true,name:"owner",type:"address"},{indexed:true,name:"spender",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:false,inputs:[{indexed:true,name:"from",type:"address"},{indexed:true,name:"to",type:"address"},{indexed:false,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];

var ERC721Abi = [{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint256",name:"maxNftSupply",type:"uint256"},{internalType:"uint256",name:"saleStart",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"owner",type:"address"},{indexed:true,internalType:"address",name:"approved",type:"address"},{indexed:true,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"owner",type:"address"},{indexed:true,internalType:"address",name:"operator",type:"address"},{indexed:false,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"previousOwner",type:"address"},{indexed:true,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"from",type:"address"},{indexed:true,internalType:"address",name:"to",type:"address"},{indexed:true,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"BAYC_PROVENANCE",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_APES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"REVEAL_TIMESTAMP",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"apePrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"emergencySetStartingIndexBlock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipSaleState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxApePurchase",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"numberOfTokens",type:"uint256"}],name:"mintApe",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reserveApes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleIsActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"provenanceHash",type:"string"}],name:"setProvenanceHash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"revealTimeStamp",type:"uint256"}],name:"setRevealTimestamp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"setStartingIndex",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startingIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"startingIndexBlock",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}];

var IERC721MetadataAbi = [{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"owner",type:"address"},{indexed:true,internalType:"address",name:"approved",type:"address"},{indexed:true,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"owner",type:"address"},{indexed:true,internalType:"address",name:"operator",type:"address"},{indexed:false,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:false,inputs:[{indexed:true,internalType:"address",name:"from",type:"address"},{indexed:true,internalType:"address",name:"to",type:"address"},{indexed:true,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"operator",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"owner",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];

var ERC20 = ERC20Abi;
var ERC721 = ERC721Abi;
var IERC721Metadata = IERC721MetadataAbi;

var verifyEthSig = function (address, credentials) {
    return new Promise(function (resolve, reject) {
        try {
            var recovered = sigUtil__default["default"].recoverPersonalSignature(credentials);
            if (!recovered || recovered !== address) {
                throw new Error("Invalid credentials (recovered address didn't match login address)");
            }
            resolve(address);
        }
        catch (e) {
            reject(e);
        }
    });
};

var verifySolSig = function (address, credentials) {
    return new Promise(function (resolve, reject) {
        try {
            var message = new TextEncoder().encode(credentials.data.toString());
            var signature = Buffer.from(JSON.parse(credentials.signature));
            var pubKey = new web3_js.PublicKey(address);
            if (!tweetnacl.sign.detached.verify(message, signature, pubKey.toBytes())) {
                throw new Error("Invalid credentials (recovered address didn't match eth address)");
            }
            resolve(address);
        }
        catch (e) {
            reject(e);
        }
    });
};

var ethSignMessage = function (_a) {
    var account = _a.account, provider = _a.provider, message = _a.message;
    return new Promise(function (resolve, reject) {
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
            reject(err.message);
        });
    });
};

exports.ERC20 = ERC20;
exports.ERC721 = ERC721;
exports.IERC721Metadata = IERC721Metadata;
exports.ethSignMessage = ethSignMessage;
exports.verifyEthSig = verifyEthSig;
exports.verifySolSig = verifySolSig;
//# sourceMappingURL=index.js.map
