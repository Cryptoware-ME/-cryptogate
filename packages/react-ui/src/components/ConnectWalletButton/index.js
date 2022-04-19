import {useEthers} from "@usedapp/core";
import React from "react";
import {Button} from "@mui/material";
import ConnectMenu from "../ConnectMenu";
import Identicon from "../Identicon";
import "./styles.scss";
import {openSidebar} from "../../redux/sidebar/sidebarSlice";
import {useDispatch} from "react-redux";

const ConnectButtonWallet = ({tokens,NFTs,background}) => {

    // Roudy l osa kela
    // 1 + "1" = "11"
    // 1 - "1" = 0

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const {deactivate, account} = useEthers();

    const dispatch = useDispatch();

    const handleConnectWallet = (e) => {
        e.preventDefault();
        return account ? deactivate() : handleActivateWallet();
    }

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const handleActivateWallet = () => {
        dispatch(openSidebar());
    };

    return account ? (
        <>
            <div className="connect-container">
                <div className="jazzicon" onClick={openMenu}>
                    <Identicon/>
                </div>
            </div>

            <ConnectMenu
                onClose={() => {
                    setIsMenuOpen(false);
                }}
                tokens={tokens} NFTs={NFTs}
                isOpen={isMenuOpen}
                background={background}
            />
        </>
    ) : (
        <div className="d-flex end">
            <Button
                kind="white-outline"
                className="connect_btn"
                onClick={(e) => handleConnectWallet(e)}
                variant="contained"
            >
                Connect Wallet
            </Button>
        </div>
    );
};

export default ConnectButtonWallet;
