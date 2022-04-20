import React, {useState} from "react";
import {Divider} from "@mui/material";
import WalletInformation from "../WalletInformation";
import TokenDetails from "../TokenDetails";
import "./styles.scss";
import NFTDisplay from "../NFTDisplay";

const ConnectMenu = ({tokens, NFTs, onClose, isOpen, background}) => {

    const [isCollectibleSelected,setIsCollectibleSelected] = useState(false);


    return (
        <div className={`menu ${isOpen && "show"}`}>
            <div
                className="overlay"
                onClick={() => {
                    onClose();
                }}
            ></div>

            <div style={{
                backgroundColor:background
            }}
                 className={`menu-dropdown ${isOpen && "active"} ${(tokens || NFTs) && "paddingBottom"} `}>
                <WalletInformation/>
                {
                    (tokens || NFTs) &&
                    <Divider className="divider"/>
                }
                <div className="d-flex">
                    {
                        tokens && !isCollectibleSelected &&

                        <div className="tokenContainer">
                            <TokenDetails tokens={tokens}/>
                        </div>
                    }
                    {
                        tokens && NFTs && !isCollectibleSelected &&
                        <Divider orientation="vertical" flexItem className="divider"/>
                    }
                    {
                        NFTs &&

                        <div className={`nftContainer ${!Boolean(tokens) || isCollectibleSelected? 'full' : ''}`}>
                            <NFTDisplay NFTs={NFTs} full={!Boolean(tokens) || isCollectibleSelected} onSelect={setIsCollectibleSelected}/>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default ConnectMenu;
