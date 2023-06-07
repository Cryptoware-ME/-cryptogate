import { Adapter, WalletReadyState } from "@solana/wallet-adapter-base";
import { WalletIcon } from "@solana/wallet-adapter-react-ui";

/**

WalletListing is a React component that represents a wallet listing item.
@param {Object} props - The component props.
@param {Adapter} props.wallet - The wallet adapter instance.
@param {any} props.heading - The heading for the wallet listing item.
@param {Function} props.onWalletCall - The function called when the wallet listing item is clicked.
@returns {React.ReactNode} The rendered WalletListing component.
@example
// Example usage
const ExampleComponent = () => {
const wallet = new WalletAdapter();
const heading = "My Wallet";
const onWalletCall = () => {
// Handle wallet call
};
return (
<WalletListing wallet={wallet} heading={heading} onWalletCall={onWalletCall} />
);
};
*/

const WalletListing = ({
  wallet,
  heading,
  onWalletCall,
}: {
  wallet: Adapter;
  heading: any;
  onWalletCall: any;
}) => {
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "black 1px solid",
        padding: "15px",
      }}
      onClick={onWalletCall}
    >
      <span style={{ paddingRight: "15px" }}>
        <WalletIcon
          style={{ width: "22px", height: "22px" }}
          wallet={{ adapter: wallet, readyState: WalletReadyState.Installed }}
        />
      </span>

      <h6
        style={{
          margin: "0",
          padding: "0",
          color: "black",
          fontSize: "15px",
        }}
      >
        {heading}
      </h6>
    </div>
  );
};

export default WalletListing;
