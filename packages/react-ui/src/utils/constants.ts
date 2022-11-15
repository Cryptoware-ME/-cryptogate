export const TOKEN_CONTRACT_METHODS = {
  BALANCE_OF: "balanceOf",
  SYMBOL: "symbol",
  DECIMALS: "decimals",
};

export const NFT_CONTRACT_METHODS = {
  BALANCE_OF: "balanceOf",
  SYMBOL: "symbol",
  TOKEN_URI: "tokenURI",
  TOKEN_OF_OWNER_BY_INDEX: "tokenOfOwnerByIndex",
};

export const build_slider_settings = ({
  rows = 1,
}: {
  rows?: number;
}) => ({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows,
});
