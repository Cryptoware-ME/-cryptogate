declare const verifyEthSig: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare const verifySolSig: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare const ethSignMessage: ({ account, signer, message, }: {
    account: any;
    signer: any;
    message: string;
}) => Promise<unknown>;

export { ethSignMessage, verifyEthSig, verifySolSig };
