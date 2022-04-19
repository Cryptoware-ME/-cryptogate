import React from 'react';
import {useEthers} from "@usedapp/core";
import {useTokenOfOwnerByIndex, useTokenURIIndex} from "../../hooks/useNFTMultiCall";
import {areAllElementsValid} from "../../utils/helpers";
import './styles.scss'
import NFTScrollable from "../NFTScrollable";

const NFTCollection = ({NFT,balance,symbol}) => {
    const {account} = useEthers()
    const tokenIds = useTokenOfOwnerByIndex({
        NFT,
        args: [account, balance]
    })
    const URIs = useTokenURIIndex({NFT, args: tokenIds})

    return (
        <div>
            {
                areAllElementsValid(URIs) && areAllElementsValid(tokenIds) &&
                   <NFTScrollable URIs={URIs} symbols={symbol} numbers={tokenIds} rows={2} />
            }

        </div>
    )
}

export default NFTCollection;