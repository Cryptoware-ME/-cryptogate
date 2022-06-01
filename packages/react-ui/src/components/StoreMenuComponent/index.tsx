import WalletInformation from "../WalletInformation";
import TokenDetails from "./TokenDetails";
import NFTDisplay from "./NFTDisplay";

const index = ({
  onClose,
  Store,
}: {
  onClose: any;
  Store?: { Tokens?: string[]; NFTs?: string[] };
}) => {
  return (
    <div>
      <WalletInformation onClose={onClose} direction="x" />
      <hr style={{ width: "100%" }} />
      {Store && (Store.Tokens || Store.NFTs) && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "felx-start",
          }}
        >
          {Store.Tokens && Store.Tokens.length > 0 && (
            <TokenDetails tokens={Store.Tokens} />
          )}

          {Store.Tokens &&
            Store.Tokens.length &&
            Store.NFTs &&
            Store.NFTs.length && (
              <div
                style={{ borderLeft: "1px solid #888888", margin: "0 2vw" }}
              ></div>
            )}

          {Store.NFTs && Store.NFTs.length > 0 && (
            <NFTDisplay
              NFTs={Store.NFTs}
              Full={!(Store.Tokens && Store.Tokens.length)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default index;
