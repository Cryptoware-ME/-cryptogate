import { Adapter } from "@solana/wallet-adapter-base";
declare const WalletListing: ({ wallet, heading, onWalletCall, }: {
    wallet: Adapter;
    heading: any;
    onWalletCall: any;
}) => JSX.Element;
export default WalletListing;
