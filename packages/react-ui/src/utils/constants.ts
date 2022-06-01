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
  full = false,
  rows = 1,
}: {
  full?: boolean;
  rows?: number;
}) => ({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: full ? 2 : 1,
  slidesToScroll: full ? 2 : 1,
  rows,
});
