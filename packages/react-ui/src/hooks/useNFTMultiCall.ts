import { EvmAddress, readContractCalls } from "@cryptogate/react-providers";
import { ERC721, IERC721Metadata } from "@cryptogate/core";
import { convertResultToReadableFormat } from "../utils/helpers";
import { NFT_CONTRACT_METHODS } from "../utils/constants";
import React from "react";

/**

The useNFTMetadataMultiCall hook retrieves metadata information for multiple NFTs using a specific method.
@param {Object} options - The options for the hook.
@param {string[]} options.NFTs - The array of NFT addresses.
@param {string} options.method - The method to call on the NFT contracts.
@param {boolean} [options.format=false] - Flag indicating whether to format the result.
@param {any[]} [options.args=[]] - Additional arguments for the method call.
@returns {any} The result of the contract calls.
@example
// Example usage
const NFTs = ["0x123...", "0x456..."];
const method = "balanceOf";
const format = true;
const args = [account];
const result = useNFTMetadataMultiCall({ NFTs, method, format, args });
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
  const [data, _] = React.useState(
    NFTs
      ? NFTs.map((nft) => ({
          abi: IERC721Metadata,
          address: nft as EvmAddress,
          method,
          args,
        }))
      : []
  );

  const result = readContractCalls(data);
  return result && format ? convertResultToReadableFormat(result) : result;
};

/**

The useTokenURIIndexCover hook retrieves the token URI for multiple NFTs at index 1.
@param {Object} options - The options for the hook.
@param {string[]} options.NFTs - The array of NFT addresses.
@returns {any} The result of the contract calls.
@example
// Example usage
const NFTs = ["0x123...", "0x456..."];
const result = useTokenURIIndexCover({ NFTs });
*/

export const useTokenURIIndexCover = ({ NFTs }: { NFTs: string[] }) => {
  const [data, _] = React.useState(
    NFTs.map((nft) => ({
      abi: ERC721,
      address: nft as EvmAddress,
      method: NFT_CONTRACT_METHODS.TOKEN_URI,
      args: [1],
    }))
  );

  return readContractCalls(data);
};

/**

The useTokenURIIndex hook retrieves the token URI for a specific NFT at the given index.
@param {Object} options - The options for the hook.
@param {string} options.NFT - The NFT address.
@param {any} options.args - Additional arguments for the method call.
@returns {any} The result of the contract calls.
@example
// Example usage
const NFT = "0x123...";
const args = [1, 2, 3];
const result = useTokenURIIndex({ NFT, args });
*/

export const useTokenURIIndex = ({ NFT, args }: { NFT: string; args: any }) => {
  const [data, _] = React.useState(
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

  const response = readContractCalls(data);
  return response;
};

/**

The useTokenOfOwnerByIndex hook retrieves the tokens owned by an address for a specific NFT and index range.
@param {Object} options - The options for the hook.
@param {string} options.NFT - The NFT address.
@param {any[]} options.args - Additional arguments for the method call.
@returns {any} The result of the contract calls.
@example
// Example usage
const NFT = "0x123...";
const args = ["0xabc...", 5];
const result = useTokenOfOwnerByIndex({ NFT, args });
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

  const [data, _] = React.useState(
    range
      ? range.map((e) => {
          return {
            abi: ERC721,
            address: NFT as EvmAddress,
            method: NFT_CONTRACT_METHODS.TOKEN_OF_OWNER_BY_INDEX,
            args: [args[0], e],
          };
        })
      : []
  );

  const result = readContractCalls(data);
  return result[0] ? convertResultToReadableFormat(result) : result;
};
