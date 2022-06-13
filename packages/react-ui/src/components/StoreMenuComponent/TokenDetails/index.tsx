import { useEthereum } from "@cryptogate/react-providers";
import { useTokensMultiCall } from "../../../hooks/useTokensMultiCall";
import { toDecimals } from "../../../utils/helpers";
import { TOKEN_CONTRACT_METHODS } from "../../../utils/constants";
import "./TokenDetails.module.css";
import { useTheme } from "@cryptogate/react-providers";

const index = ({ tokens }: { tokens?: string[] }) => {
  const { account } = useEthereum();
  const { Theme } = useTheme();

  const balance = useTokensMultiCall({
    tokenList: tokens as string[],
    method: TOKEN_CONTRACT_METHODS.BALANCE_OF,
    format: true,
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
          color: Theme.primaryText,
        }}
      >
        TOKENS
      </p>
      <div className="tokenDetailsContainer">
        {balance[0] &&
          symbol[0] &&
          decimals[0] &&
          balance.map((e, index) => (
            <div key={`token-mainlist-${index}`}>
              {e && (
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1vh 0",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "500",
                          color: Theme.primaryText,
                        }}
                      >
                        {symbol[index]}
                      </p>
                      <p style={{ margin: 0, color: Theme.secondaryText }}>
                        {toDecimals({
                          number: e[0],
                          precision: 7,
                          tokenDecimals: decimals[index],
                        })}
                      </p>
                    </div>
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
