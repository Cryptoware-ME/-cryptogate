export declare const useNFTMetadataMultiCall: ({ NFTs, method, format, args, }: {
    NFTs: string[];
    method: string;
    format?: boolean | undefined;
    args?: any[] | undefined;
}) => any;
export declare const useTokenURIIndexCover: ({ NFTs }: {
    NFTs: string[];
}) => (any[] | undefined)[];
export declare const useTokenURIIndex: ({ NFT, args }: {
    NFT: string;
    args: any;
}) => (any[] | undefined)[];
export declare const useTokenOfOwnerByIndex: ({ NFT, args, }: {
    NFT: string;
    args: any[];
}) => any;
