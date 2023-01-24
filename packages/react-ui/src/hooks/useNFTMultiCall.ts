import { readContractCalls } from "@cryptogate/react-providers";
import { ERC721, IERC721Metadata } from "@cryptogate/core";
import { convertResultToReadableFormat } from "../utils/helpers";
import { NFT_CONTRACT_METHODS } from "../utils/constants";

/**
 * A hook for performing multiple calls to the metadata of multiple NFTs at once.
 */
export const useNFTMetadataMultiCall = ({
  NFTs,
  method,
  format = false,
  args = [],
}: {
  NFTs: string[];
  method: string;
  format?: boolean;
  args?: any[];
}) => {
  const result = readContractCalls(
    NFTs
      ? NFTs.map((nft) => ({
        abi: IERC721Metadata,
        address: nft,
        method,
        args,
      }))
      : []
  );
  return result && format ? convertResultToReadableFormat(result) : result;
};

/**
 * useTokenURIIndexCover is a hook that returns the URI of an NFT at a given index.
 */
export const useTokenURIIndexCover = ({ NFTs }: { NFTs: string[] }) => {
  return readContractCalls(
    NFTs.map((nft) => ({
      abi: ERC721,
      address: nft,
      method: NFT_CONTRACT_METHODS.TOKEN_URI,
      args: [1],
    }))
  );
};

/**
 * Returns the token URI of an NFT at the given index
 */
export const useTokenURIIndex = ({ NFT, args }: { NFT: string; args: any }) => {
  const response = readContractCalls(
    args
      ? args.map((e: number) => {
        return {
          abi: ERC721,
          address: "" + NFT,
          method: NFT_CONTRACT_METHODS.TOKEN_URI,
          args: e ? [e] : [],
        };
      })
      : []
  );
  return response;
};

/**
 * useTokenOfOwnerByIndex is a hook function that takes in an NFT contract address and an array of arguments as input.
 */
export const useTokenOfOwnerByIndex = ({
  NFT,
  args,
}: {
  NFT: string;
  args: any[];
}) => {
  var range = Array.from(Array(args[1] - 1).keys()).map((x) => x + 1);
  range.unshift(0);
  const result = readContractCalls(
    range
      ? range.map((e) => {
        return {
          abi: ERC721,
          address: "" + NFT,
          method: NFT_CONTRACT_METHODS.TOKEN_OF_OWNER_BY_INDEX,
          args: [args[0], e],
        };
      })
      : []
  );
  return result[0] ? convertResultToReadableFormat(result) : result;
};
