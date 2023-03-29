import { EvmAddress, readContractCalls } from "@cryptogate/react-providers";
import { ERC721, IERC721Metadata } from "@cryptogate/core";
import { convertResultToReadableFormat } from "../utils/helpers";
import { NFT_CONTRACT_METHODS } from "../utils/constants";
import React from "react";

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
  const [data, _] = React.useState(NFTs
    ? NFTs.map((nft) => ({
      abi: IERC721Metadata,
      address: nft as EvmAddress,
      method,
      args,
    }))
    : [])

  const result = readContractCalls(data);
  return result && format ? convertResultToReadableFormat(result) : result;
};

export const useTokenURIIndexCover = ({ NFTs }: { NFTs: string[] }) => {
  const [data, _] = React.useState(NFTs.map((nft) => ({
    abi: ERC721,
    address: nft as EvmAddress,
    method: NFT_CONTRACT_METHODS.TOKEN_URI,
    args: [1],
  })))

  return readContractCalls(
    data
  );
};

export const useTokenURIIndex = ({ NFT, args }: { NFT: string; args: any }) => {
  const [data, _] = React.useState(args
    ? args.map((e: number) => {
      return {
        abi: ERC721,
        address: "" + NFT,
        method: NFT_CONTRACT_METHODS.TOKEN_URI,
        args: e ? [e] : [],
      };
    })
    : [])

  const response = readContractCalls(data);
  return response;
};

export const useTokenOfOwnerByIndex = ({
  NFT,
  args,
}: {
  NFT: string;
  args: any[];
}) => {
  var range = Array.from(Array(args[1] - 1).keys()).map((x) => x + 1);
  range.unshift(0);

  const [data, _] = React.useState(range
    ? range.map((e) => {
      return {
        abi: ERC721,
        address: NFT as EvmAddress,
        method: NFT_CONTRACT_METHODS.TOKEN_OF_OWNER_BY_INDEX,
        args: [args[0], e],
      };
    })
    : [])

  const result = readContractCalls(data);
  return result[0] ? convertResultToReadableFormat(result) : result;
};
