import DappConfig from "./dapp";
import SolappConfig from "./solapp";

const stage = process.env.NEXT_PUBLIC_ENV;

const config = {
  DappConfig: { ...DappConfig },
  SolConfig: SolappConfig,
};
export default config;
