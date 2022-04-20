import React from 'react';
import {Avatar, Typography} from "@mui/material";
import {useEtherBalance, useEthers} from "@usedapp/core";
import disconnect from "../../assets/images/disconnectWalletIcon/disconnect.svg";
import './style.scss'
import {closeSidebar} from "../../redux/sidebar/sidebarSlice";
import {useDispatch} from "react-redux";
import {utils} from "ethers";

const WalletInformation = () => {
    const dispatch = useDispatch();

    const {deactivate, account} = useEthers();
    const etherBalance = useEtherBalance(account)

    const handleDisconnect = () => {
        account && deactivate();
        dispatch(closeSidebar());
    };

    return (
        <div className="d-flex between">
            <div>
                <Typography variant="body1">
                    Total Balance
                </Typography>
                <Typography variant="h5">
                    {etherBalance && account && utils.formatEther(etherBalance).slice(0, 7)} ETH
                </Typography>
            </div>
            <div className="d-flex center">
                <Typography className="address" variant="body2">
                    {account.slice(0, 6)}...{account.slice(-3)}
                </Typography>
                <img src={disconnect} alt="disconnect" className="disconnect" onClick={handleDisconnect}/>
            </div>
            <div className="d-flex center">
                <Avatar/>
            </div>
            <div className="d-flex center">
                <Avatar/>
            </div>
        </div>
    );
};

export default WalletInformation;