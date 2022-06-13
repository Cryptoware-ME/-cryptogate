import WalletInformation from "../WalletInformation";
import TokenDetails from "./TokenDetails";
import NFTDisplay from "./NFTDisplay";
import { useTheme } from "@cryptogate/react-providers";

const index = ({
  onDisconnect,
  Store,
}: {
  onDisconnect: any;
  Store?: { Tokens?: string[]; NFTs?: string[] };
}) => {
  const { Theme } = useTheme();

  return (
    <div>
      <WalletInformation onDisconnect={onDisconnect} direction="x" />

      {Store && (Store.Tokens || Store.NFTs) && (
        <>
          <hr
            style={{
              width: "100%",
              borderTop: 0,
              borderBottom: `1px solid ${Theme.secondaryBackground}`,
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
              <TokenDetails tokens={Store.Tokens} />
            )}

            {Store.Tokens &&
              Store.Tokens.length &&
              Store.NFTs &&
              Store.NFTs.length && (
                <div
                  style={{
                    borderLeft: `1px solid ${Theme.secondaryBackground}`,
                    margin: "0 2vw 0 0",
                  }}
                ></div>
              )}

            {Store.NFTs && Store.NFTs.length > 0 && (
              <NFTDisplay
                NFTs={Store.NFTs}
                Full={!(Store.Tokens && Store.Tokens.length)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default index;
