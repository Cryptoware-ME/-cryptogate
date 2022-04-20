import { sign } from "tweetnacl";
import { PublicKey } from "@solana/web3.js";

export default (address: string, credentials: { data: string, signature: string }) =>
  new Promise((resolve, reject) => {
    try {
      const message = new TextEncoder().encode(credentials.data);
      const signature = Buffer.from(JSON.parse(credentials.signature));
      const pubKey = new PublicKey(address);
      if (!sign.detached.verify(message, signature, pubKey.toBytes())) {
        throw new Error(
            "Invalid credentials (recovered address didn't match eth address)",
        );
      }
      resolve(address);
    } catch (e) {
      reject(e);
    }
  });
