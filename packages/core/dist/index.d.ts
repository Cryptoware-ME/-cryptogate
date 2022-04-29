declare const verifyEthSig: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare const verifySolSig: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare const ethSignMessage: ({ account, provider, message, }: {
    account: any;
    provider: any;
    message: string;
}) => Promise<unknown>;

export { ethSignMessage, verifyEthSig, verifySolSig };
