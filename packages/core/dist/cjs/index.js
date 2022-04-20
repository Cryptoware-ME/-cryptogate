'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sigUtil = require('@metamask/eth-sig-util');
var tweetnacl = require('tweetnacl');
var web3_js = require('@solana/web3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sigUtil__default = /*#__PURE__*/_interopDefaultLegacy(sigUtil);

var ethSignatures = (function (address, credentials) {
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
});

var ethSignatures$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ethSignatures
});

var solSignatures = (function (address, credentials) {
    return new Promise(function (resolve, reject) {
        try {
            var message = new TextEncoder().encode(credentials.data);
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
});

var solSignatures$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': solSignatures
});

exports.verifyEthSig = ethSignatures$1;
exports.verifySolSig = solSignatures$1;
//# sourceMappingURL=index.js.map
