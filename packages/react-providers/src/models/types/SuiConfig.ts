import { SuiWallets } from "../../constants/wallets";

export type SuiConfig = {
  wallets: SuiWallets[];
  autoConnect?: boolean;
};
