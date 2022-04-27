export const signMessage = async ({
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
      .then((signature: any) => {
        resolve({
          message,
          signature,
          address: account,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  });
};
