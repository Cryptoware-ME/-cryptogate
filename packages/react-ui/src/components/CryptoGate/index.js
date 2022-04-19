import React from "react";
// import { DAppProvider } from "@usedapp/core";
import { Provider } from "react-redux";
import ConnectButtonWallet from "../ConnectWalletButton";
import config from "./../../config";
import { store } from "../../app/store";
import ConnectWalletList from "../ConnectWalletList";
import MultichainProvider from "./../../providers/Multichain";
const CryptoGate = ({
  tokens,
  NFTs,
  displayStyle,
  metamask,
  coinbase,
  fortmatic,
  torus,
  walletConnect,
  background = "white",
}) => {
  return (
    <Provider store={store(tokens, NFTs)}>
      {/* <DAppProvider config={config.DappConfig}> */}
      <MultichainProvider
        ethConfig={config.DappConfig}
        solConfig={config.SolConfig}
        // ethContracts={}
        children={
          <>
            <ConnectButtonWallet
              tokens={tokens}
              NFTs={NFTs}
              background={background}
            />
            <ConnectWalletList
              displayStyle={displayStyle}
              metamask={metamask}
              coinbase={coinbase}
              fortmatic={fortmatic}
              torus={torus}
              walletConnect={walletConnect}
            />
          </>
        }
      />
      {/* </DAppProvider> */}
    </Provider>
  );
};

export default CryptoGate;
