import WalletInformation from "../WalletInformation";
import TokenDetails from "./TokenDetails";
import NFTDisplay from "./NFTDisplay";

/**
* index is a React functional component that displays the wallet information and token or NFT details.
* @param {{onDisconnect: any; Store?: { Tokens?: string[]; NFTs?: string[] }}} - An object with the following properties:
* onDisconnect: A callback function to be executed when the user disconnects their wallet.
* Store: An object that contains the token and NFT addresses.
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
