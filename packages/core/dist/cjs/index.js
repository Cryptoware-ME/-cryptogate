'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sigUtil = require('@metamask/eth-sig-util');
var tweetnacl = require('tweetnacl');
var web3_js = require('@solana/web3.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sigUtil__default = /*#__PURE__*/_interopDefaultLegacy(sigUtil);

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

exports.ethSignMessage = ethSignMessage;
exports.verifyEthSig = verifyEthSig;
exports.verifySolSig = verifySolSig;
//# sourceMappingURL=index.js.map
