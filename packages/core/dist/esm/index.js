import sigUtil from '@metamask/eth-sig-util';
import { sign } from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';

var ethSignatures = (function (address, credentials) {
    return new Promise(function (resolve, reject) {
        try {
            var recovered = sigUtil.recoverPersonalSignature(credentials);
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
            var message = new TextEncoder().encode(credentials.data.toString());
            var signature = Buffer.from(JSON.parse(credentials.signature));
            var pubKey = new PublicKey(address);
            if (!sign.detached.verify(message, signature, pubKey.toBytes())) {
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

export { ethSignatures$1 as verifyEthSig, solSignatures$1 as verifySolSig };
//# sourceMappingURL=index.js.map
