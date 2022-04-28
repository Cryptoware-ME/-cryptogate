import { getWithExpiry } from "../localstorage/getWithExpire";
import { setWithExpiry } from "../localstorage/setWithExpire";

export const signEthMessage = (
  account: any,
  provider: any,
  message: string
) => {
    return new Promise((resolve, reject) => {
        signMessage({
          account,
          provider,
          message: `${message}. Wallet address: ${account} ts-${Date.now()}`,
        })
          .then((sig) => {
            setWithExpiry(`sig-${account.toLowerCase()}`, sig, 43200000);
            resolve(getWithExpiry(`sig-${account.toLowerCase()}`));
          })
          .catch((e) => {
            reject(e);
          });
      });
};

const signMessage = ({
  account,
  provider,
  message,
}: {
  account: any;
  provider: any;
  message: string;
}) => {
  return new Promise((resolve, reject) => {
    if (!provider) reject("No crypto wallet connected.");
    const signer = provider.getSigner();
    signer
      .signMessage(message)
      .then((signature: object) => {
        resolve({
          message,
          signature,
          address: account,
        });
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  });
};
