import WalletInformation from "../WalletInformation";
import StoreMenuComponent from "../StoreMenuComponent";
import { ConnectedMenu } from "../ConnectWalletComponent";

const ConnectMenu = ({
  ChosenConnectedMenu,
  onClose,
  isOpen,
  Store,
}: {
  ChosenConnectedMenu: ConnectedMenu;
  onClose: any;
  isOpen: boolean;
  Store?: { Tokens?: string[]; NFTs?: string[] };
}) => {
  return (
    <>
      {ChosenConnectedMenu == ConnectedMenu.NOMENU && <></>}
      {ChosenConnectedMenu != ConnectedMenu.NOMENU && (
        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: 0,
            left: 0,
            right: "0",
            zIndex: "1000",
            visibility: isOpen ? "visible" : "hidden",
          }}
        >
          <div
            style={{ width: "100%", height: "100%" }}
            onClick={() => {
              onClose();
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 15px 15px rgba(0, 0, 0, 0.2)",
              opacity: isOpen ? "1" : "0",
              display: "block",
              position: "absolute",
              top: "80px",
              right: "40px",
              borderRadius: "20px",
              border: "1px solid #555555",
              boxSizing: "border-box",
              transform: isOpen ? "translateY(0)" : "translateY(-100%)",
              transition: "all 0.2s ease-in-out",
              height: "auto",
              padding: "20px 20px 20px 20px",
              width: "auto",
            }}
          >
            {ChosenConnectedMenu == ConnectedMenu.WALLETINFORMATION && (
              <WalletInformation onClose={onClose} />
            )}
            {ChosenConnectedMenu == ConnectedMenu.STORE && (
              <StoreMenuComponent onClose={onClose} Store={Store} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectMenu;
