import DappConfig from "./dapp";
import SolappConfig from "./solapp";

const config = {
  DappConfig: { ...DappConfig },
  SolConfig: SolappConfig,
};
export default config;
