import React from "react";

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
