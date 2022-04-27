import { useMultichain } from "@cryptogate/react-providers";
import { utils } from "ethers";

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
        placeContent: "space-between",
      }}
    >
      <div>
        <p>Total Balance</p>
        <h5>
          {etherBalance &&
            account &&
            utils.formatEther(etherBalance).slice(0, 7)}{" "}
          ETH
        </h5>
      </div>
      <div
        style={{
          display: "flex",
          placeContent: "center",
        }}
      >
        <p style={{ color: "#c4c4c4" }}>
          {account?.slice(0, 6)}...{account?.slice(-3)}
        </p>
        <p onClick={handleDisconnect}>Disconnect</p>
        {/* <img
          src={disconnect}
          alt="disconnect"
          className="disconnect"
          onClick={handleDisconnect}
        /> */}
      </div>
    </div>
  );
};

export default WalletInformation;
