const sigUtil = require("@metamask/eth-sig-util");

module.export = 
    (address, credentials) => 
        new Promise((resolve, reject) => {
            try{
                const recovered = sigUtil.recoverPersonalSignature(credentials);
                if (!recovered || recovered !== address) {
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