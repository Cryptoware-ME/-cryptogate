import { useEthereum } from "@cryptogate/react-providers";
import { NFT_CONTRACT_METHODS } from "../../../utils/constants";
import {
  useNFTMetadataMultiCall,
  useTokenURIIndexCover,
} from "../../../hooks/useNFTMultiCall";
import { areAllElementsValid } from "../../../utils/helpers";
import NFTSlider from "./NFTSlider";

const index = ({ NFTs, Full }: { NFTs: string[]; Full: boolean }) => {
  const { account } = useEthereum();

  const balances = useNFTMetadataMultiCall({
    NFTs,
    method: NFT_CONTRACT_METHODS.BALANCE_OF,
    format: true,
    args: [account],
  });

  const symbols = useNFTMetadataMultiCall({
    NFTs,
    method: NFT_CONTRACT_METHODS.SYMBOL,
  });

  const URIs = useTokenURIIndexCover({ NFTs });

  return (
    <div>
      <p style={{ fontWeight: "500", lineHeight: 0 }}>Collectibles</p>
      {areAllElementsValid(URIs) && areAllElementsValid(balances) && (
        <NFTSlider
          symbols={symbols}
          URIs={URIs}
          numbers={balances}
          full={Full}
        />
      )}
    </div>
  );
};

export default index;
