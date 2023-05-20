import { useEthereum, useSolana } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export const Identicon = ({ walletAddress }: { walletAddress?: string }) => {
  const { account } = useEthereum();
  const { publicKey } = useSolana();
  return (
    <Jazzicon
      diameter={35}
      seed={jsNumberForAddress(
        walletAddress
          ? walletAddress
          : account
          ? account.toString()
          : publicKey
          ? publicKey.toString()
          : ""
      )}
    />
  );
};
