/**
 * Function to sign a message with an Ethereum account
 *
 * @param {Object} - An object containing the following properties
 * @param {any} account - The Ethereum account to sign the message with
 * @param {any} provider - The provider of the Ethereum account
 * @param {string} message - The message to sign
 *
 * @returns {Promise} - A promise that resolves with the signed message object or rejects with an error message
 */
export const ethSignMessage = ({
  account,
  provider,
  message,
}: {
  account: any;
  provider: any;
  message: string;
}) => {
  return new Promise((resolve, reject) => {
    // If no provider is passed, reject the promise with an error message
    if (!provider) reject("No crypto wallet connected.");
    // Get the signer object from the provider
    const signer = provider.getSigner();
    // Use the signer to sign the message
    signer
      .signMessage(message)
      .then((signature: object) => {
        // Resolve the promise with an object containing the signed message, signature, and address
        resolve({
          message,
          signature,
          address: account,
        });
      })
      .catch((err: Error) => {
        // Reject the promise with the error message
        reject(err.message);
      });
  });
};
