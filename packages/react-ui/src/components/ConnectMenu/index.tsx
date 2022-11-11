import WalletInformation from "../WalletInformation";
import StoreMenuComponent from "../StoreMenuComponent";
import { ConnectedMenuOptions } from "../ConnectWalletComponent";

export const ConnectedMenu = ({
  ChosenConnectedMenu,
  onClose,
  onDisconnect = () => {},
  isOpen,
  Store,
}: {
  ChosenConnectedMenu: ConnectedMenuOptions;
  onClose: any;
  isOpen: boolean;
  onDisconnect?: any;
  Store?: { Tokens?: string[]; NFTs?: string[] };
}) => {
  return (
    <>
      {ChosenConnectedMenu == ConnectedMenuOptions.NOMENU && <></>}
      {ChosenConnectedMenu != ConnectedMenuOptions.NOMENU && (
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
              backgroundColor: "#fff",
              boxShadow: "0 15px 15px rgba(0, 0, 0, 0.2)",
              opacity: isOpen ? "1" : "0",
              display: "block",
              position: "absolute",
              top: "80px",
              right: "40px",
              borderRadius: "20px",
              border: `1px solid  #fff`,
              boxSizing: "border-box",
              transform: isOpen ? "translateY(0)" : "translateY(-100%)",
              transition: "all 0.2s ease-in-out",
              height: "auto",
              padding: "20px 20px 20px 20px",
              width: "auto",
            }}
          >
            {ChosenConnectedMenu == ConnectedMenuOptions.WALLETINFORMATION && (
              <WalletInformation onDisconnect={onDisconnect} />
            )}
            {ChosenConnectedMenu == ConnectedMenuOptions.STORE && (
              <StoreMenuComponent onDisconnect={onDisconnect} Store={Store} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
