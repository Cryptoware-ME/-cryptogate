import React from "react";

/**

WalletListing is a React component that represents a listing item for a wallet.
@param {Object} props - The component props.
@param {React.ReactNode} props.Icon - The icon component for the wallet listing.
@param {*} props.heading - The heading for the wallet listing.
@param {function} props.onWalletCall - The callback function triggered when the wallet listing is clicked.
@returns {React.ReactNode} The rendered WalletListing component.
*/
const WalletListing = ({
  Icon,
  heading,
  onWalletCall,
}: {
  Icon: React.ReactNode;
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
      <span style={{ paddingRight: "15px" }}>{Icon}</span>

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
