
const WalletListing = ({
  iconSrc,
  heading,
  onWalletCall,
  isWhite = false,
  noBottomBorder = false,
}: {
  iconSrc: any;
  heading: any;
  onWalletCall: any;
  isWhite?: boolean;
  noBottomBorder: boolean;
}) => {
  return (
    <div
      style={
        noBottomBorder
          ? {
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "0",
              padding: "15px",
            }
          : {
              cursor: "pointer",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "black 1px solid",
              padding: "15px",
            }
      }
      onClick={onWalletCall}
    >
      {/* {isWhite && (
        <>
          <div
            style={{
              backgroundColor: "black",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "15px",
              position: "relative",
              left: "-5px",
            }}
          >
            <span style={{paddingRight: '15px'}}>
              <Image src={iconSrc} alt={heading} width="25px" height="25px" />
            </span>
          </div>
        </>
      )} */}

      {!isWhite && (
        <span style={{ paddingRight: "15px" }}>
          <img src={iconSrc} alt={heading} width="25px" height="25px" />
        </span>
      )}

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
