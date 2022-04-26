import { useMultichain } from "@cryptogate/react-providers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { isMobile } from "react-device-detect";

const Identicon = () => {
  const { ethereum } = useMultichain();
  const { account } = ethereum;
  return (
    <Jazzicon
      diameter={isMobile ? 30 : 40}
      seed={jsNumberForAddress(account?.toString() || '')}
      // className="jazzicon"
    />
  );
};

export default Identicon;
