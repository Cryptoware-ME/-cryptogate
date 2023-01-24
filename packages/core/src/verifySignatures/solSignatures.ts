/**
 * Verify a Solana signature
 *
 * @param {string} address - The Solana address the signature should match
 * @param {Object} credentials - An object containing the following properties:
 * @param {any} credentials.data - The data that was signed
 * @param {string} credentials.signature - The signature to verify
 *
 * @returns {Promise} - A promise that resolves with the verified address or rejects with an error
 */
import { sign } from "tweetnacl";
import { PublicKey } from "@solana/web3.js";

export const verifySolSig = (address: string, credentials: { data: any, signature: string }) =>
  new Promise((resolve, reject) => {
    try {
      // Encode the data as a Uint8Array
      const message = new TextEncoder().encode(credentials.data.toString());
      // Parse the signature and convert it to a Buffer
      const signature = Buffer.from(JSON.parse(credentials.signature));
      // Create a PublicKey object using the given address
      const pubKey = new PublicKey(address);
      // Verify the detached signature
      if (!sign.detached.verify(message, signature, pubKey.toBytes())) {
        throw new Error("Invalid credentials (recovered address didn't match eth address)");
      }
      // If the signature is valid, resolve the promise with the given address
      resolve(address);
    } catch (e) {
      // If an error occurs, reject the promise with the error
      reject(e);
    }
  });
