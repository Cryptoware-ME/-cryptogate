import { useMultichain } from "@cryptogate/react-providers";
import { utils } from "ethers";
import disconnect from "../../assets/images/disconnectWalletIcon/disconnect.svg";

const WalletInformation = ({ onClose }: { onClose: any }) => {
  const { ethereum } = useMultichain();
  const { getEthBalance, account, deactivate } = ethereum;
  const etherBalance = getEthBalance(account);

  const handleDisconnect = () => {
    account && deactivate();
    onClose();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeContent: "space-between",
        width: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#c4c4c4", marginRight: "10px" }}>
          {account?.slice(0, 6)}...{account?.slice(-3)}
        </p>
        <span
          style={{
            marginLeft: "10px",
            cursor: "pointer",
            height: "22px",
            width: "22px",
          }}
        >
          <img
            src={disconnect}
            alt="Disconnect"
            className="disconnect"
            onClick={handleDisconnect}
          />
        </span>
      </div>
      <hr style={{ width: "100%" }} />
      <div>
        <p>Total Balance</p>
        <h5>
          {etherBalance &&
            account &&
            utils.formatEther(etherBalance).slice(0, 7)}{" "}
          ETH
        </h5>
      </div>
    </div>
  );
};

export default WalletInformation;
