import { useEthereum, useSolana } from "@cryptogate/react-providers";
import { Identicon } from "../Identicon";
import DisconnectBtn from "./DisconnectBtn";

const WalletInformation = ({
  onDisconnect,
  direction = "y",
}: {
  onDisconnect: any;
  direction?: string;
}) => {
  const { account, deactivate, ethBalance, ens } = useEthereum();
  const { publicKey, connected, wallet, solBalance } = useSolana();

  const handleDisconnect = () => {
    account && deactivate();
    publicKey && connected && wallet.disconnect();
    onDisconnect();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction == "y" ? "column" : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {account && ens && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <p
              style={{
                color: "#323232",
                margin: "0 10px 0 0",
                opacity: "50%",
                lineHeight: 1,
              }}
            >
              {account?.slice(0, 6)}...{account?.slice(-3)}
            </p>
            <p
              style={{
                color: "#000",
                lineHeight: 0,
                opacity: "50%",
              }}
            >
              {ens ? ens : ""}
            </p>
          </div>
        )}
        {account && !ens && (
          <p
            style={{
              color: `#000`,
              margin: "0 10px 0 0",
              opacity: "50%",
              lineHeight: 1,
            }}
          >
            {account?.slice(0, 6)}...{account?.slice(-3)}
          </p>
        )}
        {publicKey && connected && (
          <p
            style={{
              color: `#000`,
              margin: "0 10px 0 0",
              opacity: "50%",
              lineHeight: 1,
            }}
          >
            {publicKey?.toString().slice(0, 3)}...
            {publicKey?.toString().slice(-3)}
          </p>
        )}
        <span
          style={{
            marginLeft: "10px",
            cursor: "pointer",
            height: "22px",
            width: "22px",
          }}
        >
          <span onClick={handleDisconnect}>
            <DisconnectBtn />
          </span>
        </span>
        <span
          style={{
            display: direction == "x" ? "flex" : "none",
            margin: "0 0 0 4vw",
          }}
        >
          <Identicon />
        </span>
      </div>

      {direction == "y" && (
        <hr style={{ width: "100%", marginBottom: "2vh" }} />
      )}
      <div
        style={{
          marginRight: direction == "x" ? "3vw" : "0",
          padding: 0,
        }}
      >
        <p style={{ margin: 0, color: `#000` }}>Total Balance</p>
        <p
          style={{
            fontWeight: "bold",
            margin: 0,
            color: `#000`,
          }}
        >
          {account && ethBalance
            ? ethBalance?.slice(0, 7) + " ETH"
            : solBalance + " SOL"}
        </p>
      </div>
    </div>
  );
};

export default WalletInformation;
