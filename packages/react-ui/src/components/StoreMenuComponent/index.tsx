import WalletInformation from "../WalletInformation";
import TokenDetails from "./TokenDetails";
import NFTDisplay from "./NFTDisplay";

/**

The index component displays wallet information, token details, and NFT display.
@param {Object} props - The component props.
@param {function} props.onDisconnect - Callback function for disconnecting the wallet.
@param {Object} [props.Store] - Object containing token and NFT information.
@param {Array} [props.Store.Tokens] - Array of token addresses.
@param {Array} [props.Store.NFTs] - Array of NFT addresses.
@returns {React.ReactNode} The rendered index component.
@example
// Example usage
const ExampleComponent = () => {
const onDisconnect = () => {
// Handle disconnect event
};
const Store = {
Tokens: ["token1", "token2"],
NFTs: ["nft1", "nft2"],
};
return (
<index onDisconnect={onDisconnect} Store={Store} />
);
};
*/

const index = ({
  onDisconnect,
  Store,
}: {
  onDisconnect: any;
  Store?: { Tokens?: string[]; NFTs?: string[] };
}) => {
  return (
    <div
      style={{
        maxWidth: `${
          Store && Store.NFTs && Store.NFTs.length ? "50vw" : "auto"
        }`,
      }}
    >
      <WalletInformation
        onDisconnect={onDisconnect}
        direction={Store && Store.NFTs && Store.NFTs.length ? "x" : "y"}
      />

      {Store && (Store.Tokens || Store.NFTs) && (
        <>
          <hr
            style={{
              width: "100%",
              borderTop: 0,
              borderBottom: `1px solid #000`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "felx-start",
              maxHeight: "320px",
            }}
          >
            {Store.Tokens && Store.Tokens.length > 0 && (
              <TokenDetails
                tokens={Store.Tokens}
                nfts={Boolean(Store.NFTs && Store.NFTs.length)}
              />
            )}

            {Store.Tokens &&
            Store.Tokens.length &&
            Store.NFTs &&
            Store.NFTs.length ? (
              <div
                style={{
                  borderLeft: `1px solid #ffffff`,
                  margin: "0 2vw 0 2vw",
                }}
              ></div>
            ) : (
              <></>
            )}

            {Store.NFTs && Store.NFTs.length > 0 ? (
              <NFTDisplay NFTs={Store.NFTs} />
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default index;
