import { useMultichain } from "@cryptogate/react-providers";
import Identicon from "../Identicon";

const defaultStyle = {
  backgroundColor: "#0d0d0d",
  color: "white",
  padding: "4px 10px",
  borderWidth: 1,
  borderRadius: "5px",
  height: "auto",
};

const index = ({ setOpenOptions }: { setOpenOptions: any }) => {
  const { ethereum } = useMultichain();
  const { account } = ethereum;

  return account ? (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: "15px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          border: "2px solid #fff",
          height: "45px",
          width: "46px",
          paddingLeft: "0.05rem",
          paddingTop: "0.03rem",
        }}
        // onClick={openMenu}
      >
        <Identicon />
      </div>
    </div>
  ) : (
    <button
      style={defaultStyle}
      onClick={() => {
        setOpenOptions(true);
      }}
    >
      Connect Wallet
    </button>
  );
};

export default index;
