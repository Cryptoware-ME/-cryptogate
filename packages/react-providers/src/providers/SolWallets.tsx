// import React, { ReactNode, useEffect, useState } from "react";
// import { WalletAdapterNetwork } from "";
// import {
//   PhantomWalletAdapter,
//   SlopeWalletAdapter,
//   SolflareWalletAdapter,
//   SolletExtensionWalletAdapter
// } from "";

// export interface SolWalletsContextProviderProps {
//   children?: ReactNode,
//   network: WalletAdapterNetwork
// }

// export interface SolWallets {
//   Phantom: PhantomWalletAdapter,
//   Slope: SlopeWalletAdapter,
//   Solflare: SolflareWalletAdapter,
//   Sollet: SolletExtensionWalletAdapter
// }

// export const SolWalletsContext = React.createContext({} as SolWallets);

// export const SolWalletsContextProvider = ({ network, children }: SolWalletsContextProviderProps) => {
//   const [Wallets, setWallets] = useState({} as SolWallets);

//   useEffect(() => {
//     if (network) {
//       setWallets({
//         Phantom: new PhantomWalletAdapter(),
//         Slope: new SlopeWalletAdapter(),
//         Solflare: new SolflareWalletAdapter({ network }),
//         Sollet: new SolletExtensionWalletAdapter({ network })
//       });
//     }
//   }, [network]);

//   return (
//     <SolWalletsContext.Provider value={{ ...Wallets }}>
//       {children}
//     </SolWalletsContext.Provider>
//   );
// };
const SolWallets = () => {};

export default SolWallets;
