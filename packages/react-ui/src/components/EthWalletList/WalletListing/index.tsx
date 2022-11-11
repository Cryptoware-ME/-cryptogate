const WalletListing = ({
  iconSrc,
  heading,
  onWalletCall,
}: {
  iconSrc: any;
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
        <img src={iconSrc} alt={heading} width="25px" height="25px" />
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
