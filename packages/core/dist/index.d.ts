declare const ERC20: ({
    constant: boolean;
    inputs: {
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        name: string;
        type: string;
    }[];
    payable: boolean;
    stateMutability: string;
    type: string;
    anonymous?: undefined;
} | {
    payable: boolean;
    stateMutability: string;
    type: string;
    constant?: undefined;
    inputs?: undefined;
    name?: undefined;
    outputs?: undefined;
    anonymous?: undefined;
} | {
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    constant?: undefined;
    outputs?: undefined;
    payable?: undefined;
    stateMutability?: undefined;
})[];
declare const ERC721: ({
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
    name?: undefined;
    outputs?: undefined;
} | {
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    stateMutability?: undefined;
    outputs?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
})[];
declare const IERC721Metadata: ({
    anonymous: boolean;
    inputs: {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    type: string;
    outputs?: undefined;
    stateMutability?: undefined;
} | {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: string;
    type: string;
    anonymous?: undefined;
})[];

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
