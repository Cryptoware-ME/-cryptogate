import { useEthereum } from "../../../cryptogate";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { isMobile } from "react-device-detect";

export const Identicon = ({ walletAddress }: { walletAddress?: string }) => {
  const { account } = useEthereum();
  return (
    <Jazzicon
      diameter={isMobile ? 30 : 40}
      seed={jsNumberForAddress(
        walletAddress ? walletAddress : account?.toString() || ""
      )}
    />
  );
};
