import React from 'react';
import {Grid} from "@mui/material";
import NFTImage from "../NFTImage";
import './styles.scss';

const NFTScrollable = ({URIs, symbols, numbers, columns=2, rows=2}) => {
    return (
        <Grid container className="image-container" height={`${212*rows}px`}>
            {
                URIs.map((uri, index) => (
                    <Grid item xs={12/columns} padding="5px" key={`${Array.isArray(symbols)? symbols[index]:symbols}-${numbers[index]}`}>
                        <NFTImage  symbol={Array.isArray(symbols)? symbols[index]:symbols} number={numbers[index]} URI={uri}/>
                    </Grid>
                ))
            }

        </Grid>
    );
};

export default NFTScrollable;