import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {build_slider_settings} from "../../utils/constants";
import NFTImage from "../NFTImage";
import './styles.scss';

const NFTSlider = ({URIs, symbols, numbers,full=false,rows=1,isSingle=false,clickable=false,minNumberForClick=-1,onCollectionSelected}) => {
    console.log(URIs, symbols, numbers)
    return (
        <Slider {...build_slider_settings(full,rows)}>
            {
                URIs.map((uri, index) => (
                    <div onClick={() => {
                        if(clickable && numbers[index]>minNumberForClick){
                            onCollectionSelected(index)
                        }
                    }} key={`${Array.isArray(symbols)? symbols[index]:symbols}-${numbers[index]}`}>
                        <div className={`NFTContainer ${numbers[index]>minNumberForClick && clickable? 'clickable' : '' } ${rows===2?'doubleRow':''}`}>
                            <NFTImage key={index} URI={uri} number={numbers[index]} symbol={Array.isArray(symbols)? symbols[index]:symbols} isSingle={isSingle}/>
                        </div>

                    </div>))
            }
        </Slider>
    );
};

export default NFTSlider;