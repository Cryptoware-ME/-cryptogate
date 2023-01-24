import sigUtil from "@metamask/eth-sig-util";

/**
 * Function to verify an Ethereum signature
 *
 * @param {string} address - The Ethereum address the signature should match
 * @param {Object} credentials - An object containing the following properties:
 * @param {any} credentials.data - The data that was signed
 * @param {string} credentials.signature - The signature to verify
 *
 * @returns {Promise} - A promise that resolves with the verified address or rejects with an error
 */
export const verifyEthSig = (address: string, credentials: {data: any, signature: string}) =>
  new Promise((resolve, reject) => {
    try {
      // Use the recoverPersonalSignature function from the sigUtil library to recover the address that signed the data
      const recovered = sigUtil.recoverPersonalSignature(credentials);
      // If the recovered address doesn't match the given address or if no address was recovered, throw an error
      if (!recovered || recovered !== address) {
        throw new Error(
          "Invalid credentials (recovered address didn't match login address)"
        );
      }
      // If the signature is valid, resolve the promise with the given address
      resolve(address);
    } catch (e) {
      // If an error occurs, reject the promise with the error
      reject(e);
    }
  });
