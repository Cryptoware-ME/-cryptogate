import sigUtil from '@metamask/eth-sig-util';
import { sign } from 'tweetnacl';
import { PublicKey } from '@solana/web3.js';

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

var signEthMessage = function (account, provider, message) {
    return new Promise(function (resolve, reject) {
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
    });
};
var signMessage = function (_a) {
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
            console.log(err.message);
        });
    });
};

export { getWithExpiry, setWithExpiry, signEthMessage, verifyEthSig, verifySolSig };
//# sourceMappingURL=index.js.map
