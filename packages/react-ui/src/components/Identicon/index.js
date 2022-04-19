import {useEthers} from "@usedapp/core";
import Jazzicon, {jsNumberForAddress} from "react-jazzicon";
import {isMobile} from 'react-device-detect';

const Identicon = () => {
    const {account} = useEthers();
    return (
        <Jazzicon
            diameter={isMobile ? 30 : 40}
            seed={jsNumberForAddress(account)}
            className="jazzicon"
        />
    );
};

export default Identicon;
