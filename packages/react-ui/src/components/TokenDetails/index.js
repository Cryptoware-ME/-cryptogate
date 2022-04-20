import React from 'react';
import {Avatar, Typography} from "@mui/material";
import './styles.scss';
import {useTokensMultiCall} from "../../hooks/useTokensMultiCall";
import {useEthers} from "@usedapp/core";
import {TOKEN_CONTRACT_METHODS} from "../../utils/constants";
import {toDecimals} from "../../utils/helpers";

const TokenDetails = ({full, tokens}) => {
    const {account} = useEthers()


    const balance = useTokensMultiCall({
        tokenList: tokens,
        method: TOKEN_CONTRACT_METHODS.BALANCE_OF,
        format: true,
        args: [account]
    });
    const symbol = useTokensMultiCall({tokenList: tokens, method: TOKEN_CONTRACT_METHODS.SYMBOL});
    const decimals = useTokensMultiCall({tokenList: tokens, method: TOKEN_CONTRACT_METHODS.DECIMALS})

    return (
        <div className="t-container">
            <Typography variant="body2" className="title">
                Tokens
            </Typography>
            <div>
                {balance[0] && symbol[0] && decimals[0] &&
                balance.map((e, index) =>
                    (
                        <div key={`token-mainlist-${index}`}>
                            {e && <div className="d-flex between singleToken" >

                                <Avatar/>
                                <div>
                                    <Typography variant="body2">
                                        {symbol[index]}
                                    </Typography>
                                    <Typography variant="body2">
                                        {toDecimals({
                                            number: e[0],
                                            precision: 7,
                                            tokenDecimals: decimals[index]
                                        })}
                                    </Typography>
                                </div>
                            </div>}
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default TokenDetails;