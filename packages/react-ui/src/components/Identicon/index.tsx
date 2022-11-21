import { useEthereum } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export const Identicon = ({ walletAddress }: { walletAddress?: string }) => {
  const { account } = useEthereum();
  return (
    <Jazzicon
      diameter={35}
      seed={jsNumberForAddress(
        walletAddress ? walletAddress : account?.toString() || ""
      )}
    />
  );
};
