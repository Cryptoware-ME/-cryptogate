import sigUtil from '@metamask/eth-sig-util';
import { sign } from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';

var ERC20 = require("./ERC20.json");
var ERC721 = require("./ERC721.json");
var IERC721Metadata = require("./IERC721Metadata.json");

var verifyEthSig = function (address, credentials) {
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
};

var verifySolSig = function (address, credentials) {
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

export { ERC20, ERC721, IERC721Metadata, ethSignMessage, verifyEthSig, verifySolSig };
//# sourceMappingURL=index.js.map
