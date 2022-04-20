import React from "react";

import "./styles.scss";

const WalletListing = ({iconSrc, heading, onWalletCall, isWhite = false, noBottomBorder = false}) => {

    return (
        <div style={noBottomBorder ? {borderBottom: '0'} : {}} className="walletListingWrapper" onClick={onWalletCall}>

            {isWhite && (
                <>
                    <div className="walletIconBackground"><img src={iconSrc} alt={heading}
                                                               className="walletListingIcon"/></div>
                </>
            )}

            {!isWhite && (
                <>
                    <img src={iconSrc} alt={heading} className="walletListingIcon"/>
                </>
            )}

            <h6 className="walletListingName">{heading}</h6>
        </div>
    );
};

export default WalletListing;
