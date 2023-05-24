import { useEthereum } from "@cryptogate/react-providers";
import Shabakat from "../wallets/Shabakat";

const ShabakatComp = () => {
  const { activateShabakatWallet } = useEthereum();

  return (
    <div
      style={{
        border: "black 1px solid",
        borderRadius: "8px",
        marginBottom: "20px",
        lineHeight: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
        }}
        onClick={activateShabakatWallet}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <span style={{ paddingRight: "15px" }}>{<Shabakat />}</span>
          <h6
            style={{
              margin: "0",
              padding: "0",
              color: "black",
              fontSize: "15px",
            }}
          >
            Shabakat
          </h6>
        </div>
        <div
          style={{
            background: "#5e2ec3",
            color: "white",
            borderRadius: "8px",
            padding: "2px 4px",
            fontSize: "12px",
          }}
        >
          coming soon
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      ></div>
    </div>
  );
};

export default ShabakatComp;
