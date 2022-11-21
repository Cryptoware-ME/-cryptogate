declare const ERC20: any;
declare const ERC721: any;
declare const IERC721Metadata: any;

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

export { ERC20, ERC721, IERC721Metadata, ethSignMessage, verifyEthSig, verifySolSig };
