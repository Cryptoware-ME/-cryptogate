import sigUtil from "@metamask/eth-sig-util";

export default (address: string, credentials: {data: any, signature: string}) =>
  new Promise((resolve, reject) => {
    try {
      const recovered = sigUtil.recoverPersonalSignature(credentials);
      if (!recovered || recovered !== address) {
        throw new Error(
          "Invalid credentials (recovered address didn't match login address)"
        );
      }
      resolve(address);
    } catch (e) {
      reject(e);
    }
  });
