import React, {useEffect, useState} from 'react';
import {imageURI, isUriIPFS} from "../../utils/helpers";
import './styles.scss'
import {Typography} from "@mui/material";

const NFTImage = ({URI,number,symbol}) => {
    const [image, setImg] = useState('')


    useEffect(() => {
        if(URI) {
            if (URI) {
                const validURI = isUriIPFS(URI[0])
                if (validURI) {
                    const newURI = `https://gateway.ipfs.io/ipfs/${validURI}`
                    fetch(newURI)
                        .then((d) => {
                            return d.json()
                        }).then((d) => {
                        setImg(imageURI(d.image))
                    })
                        .catch((e) => console.log(e))
                } else {
                    fetch(URI[0])
                        .then((d) => {
                            return d.json()
                        }).then((d) => {
                        setImg(imageURI(d.image))
                    })
                        .catch((e) => console.log(e))
                }
            }
        }
    }, [URI])

    return (
        <div className={`collectionContainer`}>
            <div className="collectionImageContainer">
                {
                    image &&
                    <img src={image} height={200} width="100%" alt={`${symbol}-${number}`}/>
                }
            </div>
            <div className="collectionNameContainer">
                <div className="d-flex collectionName">
                    <Typography
                        variant="body2"
                        textAlign="start"
                        className="grow"
                    >
                        {symbol}
                    </Typography>
                    { number &&
                        <Typography
                            variant="body2"
                            textAlign="end"
                        >
                            {number}
                        </Typography>
                    }
                </div>
            </div>
        </div>
    )
}

export default NFTImage;