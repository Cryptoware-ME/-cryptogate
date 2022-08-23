import { useDapp } from "@cryptogate/react-providers";
import IERC721Metadata from "../abi/IERC721Metadata.json";
import ERC721 from "../abi/ERC721.json";
import { convertResultToReadableFormat } from "../utils/helpers";
import { NFT_CONTRACT_METHODS } from "../utils/constants";
import { Interface } from "@ethersproject/abi";

const { useContractCalls } = useDapp;

const IERC721MetadataContractInterface = new Interface(IERC721Metadata.abi);
const ERC721ContractInterface = new Interface(ERC721);

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
  const result = useContractCalls(
    NFTs
      ? NFTs.map((nft) => ({
        abi: IERC721MetadataContractInterface,
        address: nft,
        method,
        args,
      }))
      : []
  );
  return result[0] && format ? convertResultToReadableFormat(result) : result;
};

export const useTokenURIIndexCover = ({ NFTs }: { NFTs: string[] }) => {
  return useContractCalls(
    NFTs.map((nft) => ({
      abi: ERC721ContractInterface,
      address: "" + nft,
      method: NFT_CONTRACT_METHODS.TOKEN_URI,
      args: [1],
    }))
  );
};

export const useTokenURIIndex = ({ NFT, args }: { NFT: string; args: any }) => {
  const response = useContractCalls(
    args
      ? args.map((e: number) => {
        return {
          abi: ERC721ContractInterface,
          address: "" + NFT,
          method: NFT_CONTRACT_METHODS.TOKEN_URI,
          args: e ? [e] : [],
        };
      })
      : []
  );
  console.log("URIs: ", response);
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
  console.log("Range: ", range);
  const result = useContractCalls(
    range
      ? range.map((e) => {
        return {
          abi: ERC721ContractInterface,
          address: "" + NFT,
          method: NFT_CONTRACT_METHODS.TOKEN_OF_OWNER_BY_INDEX,
          args: [args[0], e],
        };
      })
      : []
  );
  console.log(result);
  return result[0] ? convertResultToReadableFormat(result) : result;
};
