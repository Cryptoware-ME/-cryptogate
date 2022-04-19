import React, {useEffect, useState} from 'react';
import {NFT_CONTRACT_METHODS} from "../../utils/constants";
import {useNFTMetadataMultiCall, useTokenURIIndexCover} from "../../hooks/useNFTMultiCall";
import {Typography} from "@mui/material";
import {areAllElementsValid} from "../../utils/helpers";
import NFTCollection from "../NFTCollection";
import './styles.scss'
import NFTSlider from "../NFTSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useEthers} from "@usedapp/core";

const NFTDisplay = ({NFTs,full=false,onSelect}) => {

    const { account } = useEthers()
    const [clicked,setClicked] = useState(-1);

    const symbols = useNFTMetadataMultiCall({NFTs, method: NFT_CONTRACT_METHODS.SYMBOL})
    const balances = useNFTMetadataMultiCall({
        NFTs,
        method: NFT_CONTRACT_METHODS.BALANCE_OF,
        format: true,
        args: [account]
    })
    const URIs = useTokenURIIndexCover({NFTs})

    useEffect(() => {
        if(clicked===-1){
            onSelect(false)
        }
        else{
            onSelect(true)
        }
    },[clicked])
    return (
        <div>
            {
                clicked!==-1 &&
                <ArrowBackIcon style={{
                    cursor:'pointer'
                }} onClick={() => {
                    setClicked(-1)
                    onSelect(false)
                }} />
            }
            <div className="container">
                <Typography variant="body2" className="title">
                    {clicked>=0? `${symbols[clicked][0]}'s `:'' } Collectibles
                </Typography>
                {
                    clicked === -1 && areAllElementsValid(URIs) && areAllElementsValid(balances) &&
                    <NFTSlider onCollectionSelected={setClicked} symbols={symbols} URIs={URIs} numbers={balances} minNumberForClick={0} clickable full={full} />

                }
                {
                    clicked>=0 && areAllElementsValid(URIs) && areAllElementsValid(balances) && areAllElementsValid(symbols) &&
                    <NFTCollection NFT={NFTs[clicked]} symbol={symbols[clicked][0]} balance={balances[clicked]} />
                }

            </div>
        </div>

    );
};

export default NFTDisplay;