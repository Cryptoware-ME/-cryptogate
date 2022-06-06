import { useEthereum } from "@cryptogate/react-providers";
import { useTokenOfOwnerByIndex } from "../../../../hooks/useNFTMultiCall";

const index = ({
  NFT,
  balance,
  symbol,
}: {
  NFT: string;
  balance: number;
  symbol: string;
}) => {
  const { account } = useEthereum();

  const tokenIds = useTokenOfOwnerByIndex({
    NFT,
    args: [account, balance],
  });

  // const URIs = useTokenURIIndex({ NFT, args: tokenIds });

  return (
    <div
      style={{
        minWidth: "300px",
        maxWidth: "300px",
        padding: "1vh 25px 0 25px",
      }}
    >
      <>{symbol}</>
    </div>
  );
};

export default index;
