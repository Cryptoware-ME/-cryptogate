const styles = require("./walletlisting.module.css");

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
  isWhite: boolean;
  noBottomBorder: boolean;
}) => {
  return (
    <div
      style={noBottomBorder ? { borderBottom: "0" } : {}}
      className={styles.walletListingWrapper}
      onClick={onWalletCall}
    >
      {isWhite && (
        <>
          <div className={styles.walletIconBackground}>
            {/* <img
              src={iconSrc}
              alt={heading}
              className={styles.walletListingIcon}
            /> */}
          </div>
        </>
      )}

      {!isWhite && (
        <>
          {/* <img
            src={iconSrc}
            alt={heading}
            className={styles.walletListingIcon}
          /> */}
        </>
      )}

      <h6 className={styles.walletListingName}>{heading}</h6>
    </div>
  );
};

export default WalletListing;
