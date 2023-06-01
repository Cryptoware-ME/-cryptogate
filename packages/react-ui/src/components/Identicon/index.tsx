import { useEthereum, useSolana } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

/**

Identicon is a React component that displays an identicon based on the wallet address.
@param {Object} props - The component props.
@param {string} [props.walletAddress] - The wallet address used to generate the identicon.
@returns {React.ReactNode} The rendered Identicon component.
@example
// Example usage with a wallet address
const ExampleComponent = () => {
const walletAddress = "0x1234567890abcdef";
return (<Identicon walletAddress={walletAddress} />);
};

*/
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
