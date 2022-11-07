// TODO: GET ADDRESS
// import { useMultichain } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { isMobile } from "react-device-detect";

export const Identicon = ({ walletAddress }: { walletAddress?: string }) => {
  // const { ethereum } = useMultichain();
  // const { account } = ethereum;
  return (
    <Jazzicon
      diameter={isMobile ? 30 : 40}
      seed={jsNumberForAddress(
        // walletAddress ? walletAddress : account?.toString() || ""
        walletAddress ? walletAddress : ""
      )}
    />
  );
};
