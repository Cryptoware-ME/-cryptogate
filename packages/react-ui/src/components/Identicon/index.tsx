import { useEthereum } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

/**
 * This function renders an Identicon based on the provided Ethereum address.
 * @param props  Props of the component it includes the address of the Ethereum wallet.
 */
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
