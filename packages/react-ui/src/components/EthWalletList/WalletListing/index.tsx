import React from "react";

/**
 * It displays an icon, a heading and a onClick function that is called when the item is clicked.
 * @param Icon - An icon to be displayed next to the heading.
 * @param heading - The text to be displayed as the heading.
 * @param onWalletCall - A function that is called when the item is clicked.
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
