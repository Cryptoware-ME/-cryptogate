import { useState } from "react";
import { useEthereum } from "../../../../cryptogate";
import { NFT_CONTRACT_METHODS } from "../../../utils/constants";
import {
  useNFTMetadataMultiCall,
  useTokenURIIndexCover,
} from "../../../hooks/useNFTMultiCall";
import { areAllElementsValid } from "../../../utils/helpers";
import NFTSlider from "./NFTSlider";
import NFTCollection from "./NFTCollection";
import { useTheme } from "@cryptogate/react-providers";

const index = ({ NFTs, Full }: { NFTs: string[]; Full: boolean }) => {
  const [clicked, setClicked] = useState(-1);
  const { account } = useEthereum();
  const { Theme } = useTheme();

  var balances = useNFTMetadataMultiCall({
    NFTs,
    method: NFT_CONTRACT_METHODS.BALANCE_OF,
    format: true,
    args: [account],
  });

  var tpmNFTs = [];
  var tpmBalances = [];
  for (var i = 0; i < balances.length; i++) {
    if (balances[i] > 0) {
      tpmNFTs.push(NFTs[i]);
      tpmBalances.push(balances[i]);
    }
  }
  balances = tpmBalances;
  NFTs = tpmNFTs;

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
      <p
        style={{ fontWeight: "bold", lineHeight: 0, color: Theme.primaryText }}
        onClick={() => {
          if (clicked != -1) {
            setClicked(-1);
          }
        }}
      >
        {clicked >= 0 ? `< ${symbols[clicked][0]}'s ` : ""} COLLECTIBLES
      </p>
      {clicked == -1 &&
        areAllElementsValid(URIs) &&
        areAllElementsValid(balances) && (
          <NFTSlider
            symbols={symbols}
            URIs={URIs}
            numbers={balances}
            full={Full}
            // onCollectionSelected={setClicked}
            onCollectionSelected={() => {}}
          />
        )}
      {clicked != -1 &&
        areAllElementsValid(URIs) &&
        areAllElementsValid(balances) && (
          <NFTCollection
            NFT={NFTs[clicked]}
            symbol={symbols[clicked][0]}
            balance={balances[clicked]}
          />
        )}
    </div>
  );
};

export default index;
