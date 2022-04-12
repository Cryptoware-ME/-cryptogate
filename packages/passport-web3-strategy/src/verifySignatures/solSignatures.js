const { sign } = require("tweetnacl");
const { PublicKey }= require("@solana/web3.js");

module.export =
    (address, credentials) => 
        new Promise((resolve, reject) => {
            try{
                const message = new TextEncoder().encode(credentials.data);
                const signature = Buffer.from(JSON.parse(credentials.signature));
                const pubKey = new PublicKey(address); 
                if (!sign.detached.verify(message, signature, pubKey.toBytes())) {
                    throw new Error({
                      message:
                        "Invalid credentials (recovered address didnt match eth address)",
                    });
                }
                resolve(address);
            } catch(e) {
                reject(e);
            }
        })