export const ethSignMessage = ({
  account,
  signer,
  message,
}: {
  account: any;
  signer: any;
  message: string;
}) => {
  return new Promise((resolve, reject) => {
    if (!signer) reject("No crypto wallet connected.");
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
        reject(err.message);
      });
  });
};
