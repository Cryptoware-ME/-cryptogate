export declare const useNFTMetadataMultiCall: ({ NFTs, method, format, args, }: {
    NFTs: string[];
    method: string;
    format?: boolean | undefined;
    args?: any[] | undefined;
}) => any;
export declare const useTokenURIIndexCover: ({ NFTs }: {
    NFTs: string[];
}) => any[];
export declare const useTokenURIIndex: ({ NFT, args }: {
    NFT: string;
    args: any;
}) => any[];
export declare const useTokenOfOwnerByIndex: ({ NFT, args, }: {
    NFT: string;
    args: any[];
}) => any;
