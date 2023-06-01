import { useEthereum } from "@cryptogate/react-providers";
import { NFT_CONTRACT_METHODS } from "../../../utils/constants";
import {
  useNFTMetadataMultiCall,
  useTokenURIIndexCover,
} from "../../../hooks/useNFTMultiCall";
import { areAllElementsValid } from "../../../utils/helpers";
import NFTSlider from "./NFTSlider";
// import NFTCollection from "./NFTCollection";

/**

The index component displays a slider of NFTs based on the provided NFT IDs.
@param {Object} props - The component props.
@param {Array} props.NFTs - The array of NFT IDs to display.
@returns {React.ReactNode} The rendered index component.
@example
// Example usage
const ExampleComponent = () => {
const NFTs = ["NFT1", "NFT2", "NFT3"];
return (
<index NFTs={NFTs} />
);
};
*/

const index = ({ NFTs }: { NFTs: string[] }) => {
  const { account } = useEthereum();

  var balances = useNFTMetadataMultiCall({
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {areAllElementsValid(URIs) && areAllElementsValid(balances) && (
        <NFTSlider
          symbols={symbols}
          URIs={URIs}
          numbers={balances}
          onCollectionSelected={() => {}}
        />
      )}
    </div>
  );
};

export default index;
