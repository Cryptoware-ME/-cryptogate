import { useMultichain } from "@cryptogate/react-providers";
import Identicon from "../Identicon";
import styles from "./connectwalletbutton.module.css";

const defaultStyle = {
  backgroundColor: "#0d0d0d",
  color: "white",
  padding: "4px 10px",
  borderWidth: 1,
  borderRadius: '5px',
  height: 'auto'
};

const index = ({ btnStyle = defaultStyle, setOpenOptions }) => {
  const { ethereum } = useMultichain();
  const { account } = ethereum;

  return account ? (
    <div className={styles.connectContainer}>
      <div
        className={styles.jazzicon}
        // onClick={openMenu}
      >
        <Identicon />
      </div>
    </div>
  ) : (
    <button
      style={btnStyle}
      className={styles.connectBtn}
      onClick={() => {
        setOpenOptions(true);
      }}
    >
      Connect Wallet
    </button>
  );
};

export default index;
