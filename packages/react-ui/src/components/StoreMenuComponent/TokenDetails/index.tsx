import { useEthereum } from "@cryptogate/react-providers";
import { useTokensMultiCall } from "../../../hooks/useTokensMultiCall";
import { toDecimals } from "../../../utils/helpers";
import { TOKEN_CONTRACT_METHODS } from "../../../utils/constants";
import "./TokenDetails.module.css";

/**

The index component displays token details, including balance, symbol, and decimals.
@param {Object} props - The component props.
@param {Array} [props.tokens] - The array of token addresses to fetch details for.
@param {boolean} props.nfts - Boolean flag indicating whether the component is displaying NFTs.
@returns {React.ReactNode} The rendered index component.
@example
// Example usage
const ExampleComponent = () => {
const tokens = ["token1", "token2", "token3"];
const nfts = false;
return (
<index tokens={tokens} nfts={nfts} />
);
};
*/

const index = ({ tokens, nfts }: { tokens?: string[]; nfts: Boolean }) => {
  const { account } = useEthereum();
  const balance = useTokensMultiCall({
    tokenList: tokens as string[],
    method: TOKEN_CONTRACT_METHODS.BALANCE_OF,
    args: [account],
  });

  const symbol = useTokensMultiCall({
    tokenList: tokens as string[],
    method: TOKEN_CONTRACT_METHODS.SYMBOL,
  });

  const decimals = useTokensMultiCall({
    tokenList: tokens as string[],
    method: TOKEN_CONTRACT_METHODS.DECIMALS,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p
        style={{
          fontWeight: "bold",
          lineHeight: 0,
          color: "#000",
        }}
      >
        TOKENS
      </p>
      <div
        className="tokenDetailsContainer"
        style={{
          display: "flex",
          flexDirection: `column`,
        }}
      >
        {balance &&
          symbol &&
          decimals &&
          balance.map((e: any, index: any) => (
            <div key={`token-mainlist-${index}`}>
              {e && (
                <div>
                  <div
                    style={{
                      margin: `${nfts ? "1vh 0" : "1vh 1vw"}`,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      {symbol[index]}
                    </p>
                    <p style={{ margin: 0, color: "#323232" }}>
                      {toDecimals({
                        number: e,
                        precision: 3,
                        tokenDecimals: decimals[index],
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default index;
