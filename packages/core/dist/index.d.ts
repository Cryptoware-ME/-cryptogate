declare const verifyEthSig: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare const verifySolSig: (address: string, credentials: {
    data: any;
    signature: string;
}) => Promise<unknown>;

declare const signEthMessage: (account: any, provider: any, message: string) => Promise<unknown>;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

declare const getWithExpiry: (key: any) => any;

export { getWithExpiry, setWithExpiry, signEthMessage, verifyEthSig, verifySolSig };
