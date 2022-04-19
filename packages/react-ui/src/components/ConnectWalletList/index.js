import React from "react";

import WalletList from "../WalletList";
import "./styles.scss";
import { closeSidebar } from "../../redux/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

function ConnectWalletList({
  displayStyle,
  metamask,
  coinbase,
  fortmatic,
  torus,
  walletConnect,
}) {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          width: displayStyle === "x" ? 270 * 2 : 270,
          backgroundColor: "#1d1d1d",
          transition: "0.5s",
          zIndex: 10001,
          position: "fixed",
          right: !isSidebarOpen ? (displayStyle === "x" ? -270 * 2 : -270) : 0,
          marginTop: 50,
          height: "auto",
          maxHeight: "100%",
          overflowY: "auto",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        {displayStyle === "x" && (
          <div
            className="menuDivision"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
            onClick={() => dispatch(closeSidebar())}
          >
            <div style={{ marginRight: 10 }}>
              <p className="sidebarHeading">Ethereum Wallets</p>
              <p>Connect with one of the available wallet providers.</p>
              <WalletList
                metamask={metamask}
                coinbase={coinbase}
                fortmatic={fortmatic}
                torus={torus}
                walletConnect={walletConnect}
              />
            </div>
            <div>
              <p className="sidebarHeading">Solana Wallets</p>
              <p>Connect with one of the available wallet providers.</p>
              <WalletList
                metamask={metamask}
                coinbase={coinbase}
                fortmatic={fortmatic}
                torus={torus}
                walletConnect={walletConnect}
              />
            </div>
          </div>
        )}

        {displayStyle === "y" && (
          <div
            className="menuDivision"
            style={{
              paddingBottom: 100,
            }}
            onClick={() => dispatch(closeSidebar())}
          >
            <div>
              <p className="sidebarHeading">Ethereum Wallets</p>
              <p>Connect with one of the available wallet providers.</p>
              <WalletList
                metamask={metamask}
                coinbase={coinbase}
                fortmatic={fortmatic}
                torus={torus}
                walletConnect={walletConnect}
              />
            </div>
            <div>
              <p className="sidebarHeading">Solana Wallets</p>
              <p>Connect with one of the available wallet providers.</p>
              <WalletList
                metamask={metamask}
                coinbase={coinbase}
                fortmatic={fortmatic}
                torus={torus}
                walletConnect={walletConnect}
              />
            </div>
          </div>
        )}
      </div>
      {isSidebarOpen && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            zIndex: 10000,
            position: "fixed",
            left: 0,
          }}
          onClick={() => {
            dispatch(closeSidebar());
          }}
        />
      )}
    </>
  );
}

export default ConnectWalletList;
