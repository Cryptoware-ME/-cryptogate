import { Adapter } from "@solana/wallet-adapter-base";
import { WalletIcon } from "@solana/wallet-adapter-react-ui";
import React from "react";

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
          wallet={{ adapter: wallet }}
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
