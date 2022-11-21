export declare const TOKEN_CONTRACT_METHODS: {
    BALANCE_OF: string;
    SYMBOL: string;
    DECIMALS: string;
};
export declare const NFT_CONTRACT_METHODS: {
    BALANCE_OF: string;
    SYMBOL: string;
    TOKEN_URI: string;
    TOKEN_OF_OWNER_BY_INDEX: string;
};
export declare const build_slider_settings: ({ rows, }: {
    rows?: number | undefined;
}) => {
    autoplay: boolean;
    autoplaySpeed: number;
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    rows: number;
};
