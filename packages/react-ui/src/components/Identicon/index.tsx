import { useEthereum, useSolana } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export const Identicon = ({
  walletAddress,
  diameter,
}: {
  walletAddress?: string;
  diameter?: number;
}) => {
  const { account } = useEthereum();
  const { publicKey } = useSolana();

  return (
    <Jazzicon
      diameter={diameter || 35}
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
